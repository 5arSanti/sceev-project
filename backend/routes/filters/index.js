const express = require("express");
const { getValuesByTable } = require("../../Utils/Filters/getValuesByTable");
const router = express.Router()

router.get("/", async (request, response) => {
	try {
		const filters = await getValuesByTable([
			"Departamentos",
			"Disciplinas",
			"Empleador",
			"Municipios",
			"Nivel_Estudios",
			"Prestadores",
			"Regiones",
			"Tipo_Prestadores",
			"Tipo_Contrato"
		]);

		return response.json({filters: filters});
	}
	catch (err) {
		return response.status(500).json({ Error: err.message });
	}
})

module.exports = router;