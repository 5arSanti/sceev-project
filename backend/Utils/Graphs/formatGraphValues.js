const { getQuery } = require("../../database/query");
const { formatDistinctToArray } = require("../formatDistincToArray");

const formatGraphValues = async (column, conditions) => {

	const columnValues = await formatDistinctToArray(column, "Ofertas_empleo_completo");

	const promises = columnValues.map(async (item) => {
		const query = `
			SELECT COUNT (*)
			FROM Ofertas_empleo_completo
			WHERE ${column} = '${item}'
			-- ${conditions ? ` AND ${conditions}` : ""}
		`;

		const [values] = await getQuery(query);

		return {
            [item]:  values,
        };
	})
	const values = await Promise.all(promises);

	const result = values.reduce((acc, row) => {
		const key = Object.keys(row)[0];
		const value = row[key][''];
		acc[key] = value;
		return acc;
	  }, {});

	return result;

}

module.exports = { formatGraphValues };