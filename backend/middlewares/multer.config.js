const multer = require('multer')
const mimeTypes = require("mime-types")
const moment = require("moment");

let splitValue = "_$$_";

/**
 * Configuración de almacenamiento para archivos subidos (Excel) con nombre fechado.
 */
let storage = multer.diskStorage({
	destination: (request, file, callback) => {
		callback(null, `./csv-process`);
	},
	filename: (request, file, callback) => {
		const filePublicationDate = moment().format("YYYY-MM-DD&HH-mm-ss");

		const nameArray = [filePublicationDate, file.originalname];
		const nameFile = nameArray.join(splitValue);

		let formatName = `${nameFile}.${mimeTypes.extension(file.mimetype)}`;

		request.body.fileName = file.originalname;

		callback(null, formatName);
	}
})

/**
 * Filtro de tipos de archivo permitidos (sólo .xlsx y .xls).
 */
const fileFilter = (_, file, callback) => {
	const allowedMimeTypes = [
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		"application/vnd.ms-excel"
	];

	if (allowedMimeTypes.includes(file.mimetype)) {
		callback(null, true);
	} else {
		callback(new Error("Solo se permiten archivos Excel (.xlsx, .xls)"));
	}
};

/**
 * Middleware de carga de archivos con almacenamiento y filtro configurados.
 */
let upload = multer({
	storage: storage,
	fileFilter: fileFilter
});

module.exports = upload;