const fs = require("fs").promises;

/**
 * Elimina un archivo del sistema de archivos.
 * @param {string} path - Ruta absoluta del archivo a borrar
 */
const deleteFile = async (path) => {
	try {
		await fs.unlink(path);
	} catch (err) {
		throw new Error(err);
	}
}

module.exports = { deleteFile };