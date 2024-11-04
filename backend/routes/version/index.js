const fs = require('node:fs/promises');

const express = require("express");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const { version } = await fs.readFile('./package.json', 'utf8').
			then((data) => JSON.parse(data));

		if (!version) {
			throw Error("Error trayendo el archivo package.json");
		}

		return response.json({backVersion: version})
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

module.exports = router;