const express = require("express");
const { getValuesByTable } = require("../../Utils/Filters/getValuesByTable");
const router = express.Router()

const tableFilters = [
	"Departamentos",
	"Municipios",
	"Regiones",
	"Disciplinas",
	"Empleador",
	"Nivel_Estudios",
	"Prestadores",
	"Regiones",
	"Tipo_Contrato"
]

router.get("/", async (request, response) => {
	try {
		const filters = await getValuesByTable(tableFilters);

		return response.json({filters: filters});
	}
	catch (err) {
		return response.status(500).json({ Error: err.message });
	}
})

// router.get("/name", async (request, response) => {
// 	try {
// 		return response.json({filtersName: tableFilters});
// 	}
// 	catch (err) {
// 		return response.status(500).json({ Error: err.message });
// 	}
// })

module.exports = { router, tableFilters };