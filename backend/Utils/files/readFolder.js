const fs = require("fs");

/**
 * Lee el contenido de un directorio dentro de `uploads/`.
 * @param {string} [folder=""] - Subcarpeta a leer
 * @returns {Promise<string[]>}
 */
const readFolder = async (folder="") => {
	return new Promise((resolve, reject) => {
		fs.readdir(`uploads/${folder}`, (err, file) => {
			if (err) {
				reject(err);
			}

			resolve(file);
		});
	})
}

module.exports = { readFolder };