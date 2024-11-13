const express = require("express");
const { getColumnNames } = require("../../Utils/getColumnNames");

const router = express.Router()

router.get("/", async (request, response) => {
	try {
		const columns = await getColumnNames("Ofertas_empleo_completo", [
			"Codigo_Oferta",
			"Titulo_Oferta",
			"Descripcion_Oferta",
			"Experiencia",
			"Salario_Ingresado",
			"Cantidad_Ofertas",
			"Cargo",
			"Fecha_Publicacion",
			"Fecha_Vencimiento",
			"ID_Prestador",
			"Disciplinas",
			"ID_Empleador",
			"Tipo_Documento_Empleador",


		])

		return response.json({columns: columns});
	}
	catch (err) {
		return response.status(500).json({ Error: err.message });
	}
})

module.exports = router;