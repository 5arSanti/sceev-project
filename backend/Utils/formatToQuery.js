/**
 * Convierte un objeto de filtros en una cadena SQL con ANDs.
 * Ignora claves nulas/vacías y las listadas en `except`.
 * @param {Record<string, string|null>} query - Parámetros de búsqueda
 * @param {string[]} except - Claves a excluir del formateo
 * @returns {string} - Porción de cláusula WHERE formateada
 */
const formatToQuery = (query, except) => {
	const formated = Object.keys(query)
		.filter((key) =>
			!except.includes(key) &&
			query[key] !== null &&
			query[key] !== ""
		)
		.map((key) => `${key} = '${query[key]}'`)
		.join(" AND ");

	return formated;
}

module.exports = { formatToQuery };