const multer = require('multer')
const mimeTypes = require("mime-types")
const moment = require("moment");

//Multer config
let splitValue = "_$$_";

let storage = multer.diskStorage({
	destination: (request, file, callback) => {
        callback(null, `./csv-process`);
    },
    filename: (request, file, callback) => {
		const filePublicationDate = moment().format("YYYY-MM-DD&HH-mm-ss");

		const nameArray = [filePublicationDate, file.originalname];
		const nameFile = nameArray.join(splitValue);

		let formatName =`${nameFile}.${mimeTypes.extension(file.mimetype)}`;

		request.body.fileName = file.originalname;

		callback(null, formatName);
    }
})

let upload = multer({
	storage: storage
});

module.exports = upload;