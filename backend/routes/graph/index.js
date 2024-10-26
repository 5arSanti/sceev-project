const express = require("express");

const { validateObjectValues } = require("../../Utils/Validate/validateObjectValues");
const { transformQueryParams } = require("../../Utils/transformQueryParams");
const { formatToQuery } = require("../../Utils/formatToQuery");
const { formatGraphValues } = require("../../Utils/graphs/formatGraphValues");
const { formatValuesForGraph } = require("../../Utils/graphs/formatValuesForGraph");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const params = transformQueryParams(request.query);

		validateObjectValues(params, "Por favor ingrese el tipo de Datos");

		const { column, mes_coloca, anio_coloca  } = request.query;

		const conditions = formatToQuery(request.query, ["column"])

		const values = await formatGraphValues(column, conditions, mes_coloca, anio_coloca);

		const graphValues = formatValuesForGraph(values);

		return response.json({graphValues: graphValues})

	} catch (err) {
		return response.status(500).json({Error: err.message});
	}

});


module.exports = router;
