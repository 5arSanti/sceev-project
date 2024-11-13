const { getQuery } = require("../database/query");

const formatDistinctToArray = async (column, table="Ofertas_empleo_completo") => {
	const columnValues = await getQuery(`
		SELECT DISTINCT ${column} AS value
		FROM ${table}
	`);
	const formatedValues = columnValues.map(row => row.value).filter(value => value !== null);

	return formatedValues;
}

module.exports = { formatDistinctToArray };