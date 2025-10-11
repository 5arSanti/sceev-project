const fs = require("fs");
const readline = require('readline');
const { getColumnNames } = require("../getColumnNames");
const { readLine } = require("./readLine");
const { deleteFile } = require("./deleteFile");

/**
 * Lee un archivo (stream) y procesa cada línea insertando en DB.
 * Elimina el archivo tras finalizar y retorna el log agregado.
 * @param {{ path: string }} file - Objeto `multer` del archivo subido
 * @returns {Promise<{addedRows:number, duplicateRows:number, errorRows:number}>}
 */
const readFile = async (file) => {
	try {
		const columns = await getColumnNames();

		const rl = readline.createInterface({
			input: fs.createReadStream(file.path),
			crlfDelay: Infinity
		});

		const log = await readLine(rl, columns);

		await deleteFile(file.path)

		return log;
	}
	catch (err) {
		throw new Error(err)
	}

};


module.exports = { readFile };