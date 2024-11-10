const express = require("express");
const { formatToQuery } = require("../../Utils/formatToQuery");
const { getQuery } = require("../../database/query");
const { transformQueryParams } = require("../../Utils/transformQueryParams");
const router = express.Router();

// POST

const pageSize = 25;

router.get("/", async (request, response) => {
	try {
		const params = transformQueryParams(request.query);

        const page = parseInt(params.page, 10) || 1;
        const offset = (page - 1) * pageSize;

		const Busqueda = params.Busqueda || "";

		const conditions = formatToQuery(request.query, ["Busqueda"])

		const aditionalFilters = `
			WHERE LOWER(Titulo_Oferta) LIKE LOWER('%${Busqueda}%')
			AND (Descripcion_Oferta) LIKE ('%${Busqueda}%')

			${conditions ? `AND ${conditions}` : ""}
		`;

		// Ofertas totales segun Filtros
        const [ { totalOfertasByFilters } ] = await getQuery(`
            SELECT COUNT(*) AS totalOfertasByFilters
			FROM Ofertas_empleo_completo
			${aditionalFilters}
		`);


		// Ofertas totales
        const [ { totalOfertas } ] = await getQuery(`
			SELECT COUNT(*) AS totalOfertas FROM Ofertas_empleo_completo
		`);

		// Ofertas por departamento
        const totalByDepartment = await getQuery(`
            SELECT Departamentos, COUNT(*) AS departmentTotalValue
            FROM Ofertas_empleo_completo
            ${aditionalFilters}
            GROUP BY Departamentos
        `)

		const formatDepartmentData = totalByDepartment.map(row => ({
            department: row.Departamentos,
            totalOfertas: row.departmentTotalValue
        }));


		// Obtener ofertas de empleo
		const baseQuery = `
			SELECT * FROM Ofertas_empleo_completo
				${aditionalFilters}
			ORDER BY Fecha_Publicacion DESC
			OFFSET ${offset} ROWS
			FETCH NEXT ${pageSize} ROWS ONLY
		`;

        const oferts = await getQuery(baseQuery);

        const totalPages = Math.ceil(totalOfertas / pageSize);


		return response.status(200).json({
			ofertsData: {
				oferts: oferts,
				totalPages,
				totalOfertasByFilters,
				totalOfertas,
				totalByDepartment: formatDepartmentData
			}
		});
	}
	catch (err) {
		console.log(err)
		return response.status(500).json({Error: err.message});
	}
})

module.exports = router;