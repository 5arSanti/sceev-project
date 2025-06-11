const express = require("express");

const { validateObjectValues } = require("../../Utils/Validate/validateObjectValues");
const { transformQueryParams } = require("../../Utils/transformQueryParams");
const { formatGraphValues } = require("../../Utils/Graphs/formatGraphValues");
const { formatValuesForGraph } = require("../../Utils/Graphs/formatValuesForGraph");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const params = transformQueryParams(request.query);

		validateObjectValues(params, "Por favor ingrese el tipo de Datos");

		const { column } = params;

		// const conditions = formatToQuery(params, ["column"])

		const values = await formatGraphValues(column);

		const graphValues = formatValuesForGraph(values);

		return response.json({graph: graphValues})

	} catch (err) {
		return response.status(500).json({Error: err.message});
	}

});


module.exports = router;
