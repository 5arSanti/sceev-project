const xlsx = require("xlsx");

const parseExcel = async (filePath, columns) => {
	try {
		const excelInfo = {
			totalRows: null,
			correctRows: [],
			incorrectRows: [],
			error: [],
		};

		const workbook = xlsx.readFile(filePath);

		const sheetName = workbook.SheetNames[0];

		const sheet = workbook.Sheets[sheetName];

		const rows = xlsx.utils.sheet_to_json(sheet, { defval: null });

		const headers = Object.keys(rows[0] || {});
		const missingColumns = columns.filter((col) => !headers.includes(col));

		if (missingColumns.length > 0) {
			throw new Error(`El archivo Excel no contiene las columnas obligatorias: ${missingColumns.join(", ")}, ¿cargó el archivo correcto?`);
		}

		rows.forEach((row, index) => {
			const isValid = columns.every((col) => row[col] !== null && row[col] !== undefined);
			if (isValid) {
				excelInfo.correctRows.push({ data: row, index: index + 1 });
			} else {
				excelInfo.incorrectRows.push({ data: row, index: index + 1 });
			}
		});

		excelInfo.totalRows = rows.length;

		return excelInfo
	} catch (err) {
		throw new Error(err.message);
	}
};

module.exports = { parseExcel };