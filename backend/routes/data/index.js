const express = require("express");
const router = express.Router();

const path = require("path");

const upload = require("../../middlewares/multer.config");

const { validateFileExtension } = require("../../Utils/Files/validateFiles");

const { getColumnNames } = require("../../Utils/getColumnNames");
const { deleteFile } = require("../../Utils/files/deleteFile");
const { getDate } = require("../../Utils/getDate");
const { arrayToString } = require("../../Utils/arrayToString");
const { validateFiles } = require("../../Utils/Files/validateFiles");
const { insertValuesInTable } = require("../../Utils/Tables/insertValuesInTable");
const { verifyUser } = require("../../middlewares/verifyUser");
const { parseExcel } = require("../../Utils/Files/parseExcel");

// POST
router.post("/", verifyUser, upload.single("process-file"), async (request, response) => {
	try {
		const startDate = getDate();

		const { table } = request.body;

		const uploadedFile = request.file;

		validateFiles(uploadedFile, table);

		validateFileExtension(uploadedFile);

		const filePath = path.join(__dirname, "../../csv-process", uploadedFile.filename);

		const columns = await getColumnNames(table);

		const fileInfo = await parseExcel(filePath, columns);

		await deleteFile(filePath);

		await insertValuesInTable(table, fileInfo.correctRows);

		const endDate = getDate();

		let csvLog = {
			nameFile: request.body.fileName,
			totalRows: fileInfo.totalRows,
			correctRowsCount:
				fileInfo.correctRows.length == 0 ?
					fileInfo.correctRows.length - 0 :
					fileInfo.correctRows.length - 1,

			incorrectRowsCount: fileInfo.incorrectRows.length,
			incorrectRows: arrayToString(fileInfo.incorrectRows),
			errors: fileInfo.error.length,
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
		return response.status(500).json({ Error: err.message });
	}
})

module.exports = router;