const { getQuery } = require("../database/query");

const getColumnNames = async (tableName="Ofertas_Empleo_Desglosado", except=[]) => {
	const columns = await getQuery(`
		SELECT COLUMN_NAME AS column
		FROM INFORMATION_SCHEMA.COLUMNS
		WHERE TABLE_NAME = '${tableName}';
	`);

	const formatedColumns = columns.map(row => row.column).filter(column => !except.includes(column));

	return formatedColumns;
}

module.exports = { getColumnNames };