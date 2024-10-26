const { getQuery } = require("../../database/query");

const getValuesByTable = async (columns) => {
	const formattedFilters = {}

	const promises = columns.map(async (item) => {
		const values = await getQuery(`
			SELECT Nombre FROM ${item};
		`);

		formattedFilters[item] = values.map(row => row.Nombre);
	})

	await Promise.all(promises);

	return formattedFilters;
}

module.exports = { getValuesByTable };