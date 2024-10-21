const express = require("express");
const { getColumnNames } = require("../../Utils/getColumnNames");

const router = express.Router()

router.get("/", async (request, response) => {
	try {
		const columns = await getColumnNames("Ofertas_Empleo_Desglosado")

		return response.json({columns: columns});
	}
	catch (err) {
		return response.status(500).json({ Error: err.message });
	}
})

module.exports = router;