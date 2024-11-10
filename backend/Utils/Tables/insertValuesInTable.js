const { getQuery } = require("../../database/query");

const insertValuesInTable = async (tableName, correctRows) => {
	try {
		if (!correctRows) { return };

		const array = correctRows;

		const promises = array.map(async (item) => {

			const keys = Object.keys(item.data).join(", ");
			const values = Object.values(item.data).map(item =>
				typeof item === 'string' ? `'${item}'` : item
			).
			join(", ");

			const query = `
				INSERT INTO ${tableName} (${keys}) VALUES
				(${values})
			`;

			await getQuery(query);
		});

		await Promise.all(promises);

		return;
	}
	catch (err) {
		throw new Error(err);
	}
}

module.exports = { insertValuesInTable };