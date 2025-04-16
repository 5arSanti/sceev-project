const { getQuery } = require("../../database/query");

const insertValuesInTable = async (tableName, correctRows) => {
	if (!correctRows || correctRows.length === 0) {
		return;
	}

	const keys = Object.keys(correctRows[0].data).join(", ");
	const batchSize = 1000;

	for (let i = 0; i < correctRows.length; i += batchSize) {
		const batch = correctRows.slice(i, i + batchSize);

		const values = batch.map((item) => {
			return `(${Object.values(item.data)
				.map((value) => (typeof value === "string" ? `'${value}'` : value))
				.join(", ")})`;
		}).join(", ");

		const query = `
            INSERT INTO ${tableName} (${keys}) VALUES
            ${values}
        `;

		await getQuery(query);
	}
};

module.exports = { insertValuesInTable };