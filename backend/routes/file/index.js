const express = require("express");
const upload = require("../../middlewares/multer.config");
const { readFile } = require("../../Utils/files/readFile");


const router = express.Router();

router.post("/upload", upload.single("file"), async (request, response) => {
	try {
		const uploadedFile = request.file;

		if (!uploadedFile) {
		  throw new Error("Error procesando el archivo");
		}

		const log = await readFile(uploadedFile);

        return response.status(200).json({
			Status: "Success",
			message: "Archivo procesado correctamente",
			log: log
		});

	}
	catch (err) {
		return response.status(500).json({Error: err});
	}
})


module.exports = router;
