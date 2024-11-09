const { getQuery } = require("../database/query");

const exceptValues = ["ID_Disciplina", "ID_Municipio", "ID_Departamento"]

const getColumnNames = async (tableName="Ofertas_Empleo_Desglosado", except=exceptValues) => {
	const query = `
		SELECT COLUMN_NAME AS column_name
		FROM INFORMATION_SCHEMA.COLUMNS
		WHERE TABLE_NAME = '${tableName}';
	`
	const columns = await getQuery(query);

	const formatedColumns = columns.map(row => row.column_name).filter(column => !except.includes(column));

	return formatedColumns;
}

module.exports = { getColumnNames };