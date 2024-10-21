const multer = require('multer')
const mimeTypes = require("mime-types")
const moment = require("moment");

//Multer config
let storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (request, file, callback) => {
		const fileDate = moment().format("YYYY-MM-DD_HH-mm-ss");

		let formatName =`${fileDate}_${file.originalname}.${mimeTypes.extension(file.mimetype)}`;

		callback(null, formatName);
    }
})

let upload = multer({
	storage: storage
});

module.exports = upload;