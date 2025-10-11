const { getQuery } = require("../database/query");

/**
 * Retorna valores distintos de una columna como arreglo, omitiendo nulls.
 * @param {string} column - Columna sobre la cual aplicar DISTINCT
 * @param {string} [table="Ofertas_empleo_completo"] - Tabla origen
 * @returns {Promise<any[]>}
 */
const formatDistinctToArray = async (column, table="Ofertas_empleo_completo") => {
	const columnValues = await getQuery(`
		SELECT DISTINCT ${column} AS value
		FROM ${table}
	`);
	const formatedValues = columnValues.map(row => row.value).filter(value => value !== null);

	return formatedValues;
}

module.exports = { formatDistinctToArray };