const express = require("express");
const router = express.Router();

const path = require("path");

const upload = require("../../middlewares/multer.config");

const { validateFileExtension } = require("../../Utils/Files/validateFiles");

const { getColumnNames } = require("../../Utils/getColumnNames");
const { parseCSV } = require("../../Utils/Files/parseCSV");
const { deleteFile } = require("../../Utils/files/deleteFile");
const { getDate } = require("../../Utils/getDate");
const { arrayToString } = require("../../Utils/arrayToString");
const { validateFiles } = require("../../Utils/Files/validateFiles");
const { insertValuesInTable } = require("../../Utils/Tables/insertValuesInTable");

// POST
router.post("/", upload.single("process-file"), async (request, response) => {
	try {
		const startDate = getDate();

		const { table } = request.body;

		const uploadedFile = request.file;

		validateFiles(uploadedFile, table);
		validateFileExtension(uploadedFile);


		const filePath = path.join(__dirname, "../../csv-process", uploadedFile.filename);
		const columns = await getColumnNames(table);


		const csvInfo = await parseCSV(filePath, columns);

		await deleteFile(filePath);

		await insertValuesInTable(table, csvInfo.correctRows);

		const endDate = getDate();

		let csvLog = {
			nameFile: request.body.fileName,
			totalRows: csvInfo.totalRows,
			correctRowsCount:
				csvInfo.correctRows.length == 0 ?
				csvInfo.correctRows.length - 0 :
				csvInfo.correctRows.length - 1,

			incorrectRowsCount: csvInfo.incorrectRows.length,
			incorrectRows: arrayToString(csvInfo.incorrectRows),
			errors: csvInfo.error.length,
			startDate: startDate,
			endDate: endDate,
			table: table
		}

		return response.status(200).json({
			Status: "Success",
			message: "Archivo procesado correctamente",
			csvLog: [csvLog],
		});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
})

module.exports = router;