const fs = require("fs");
const readline = require('readline');
const { getColumnNames } = require("../getColumnNames");
const { readLine } = require("./readLine");
const { deleteFile } = require("./deleteFile");

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