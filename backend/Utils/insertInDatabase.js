const { postQuery, getQuery } = require("../database/query");


const insertInDatabase = async (values, columns) => {

	try {
		while (values.length < columns.length) {
			values.push(null);
		}

		const checkQuery = `SELECT COUNT(*) AS count FROM Ofertas_Empleo_Desglosado WHERE CODIGO_VACANTE = ${values[1]}`;
		const result = await getQuery(checkQuery);

		if (result[0].count > 0) {
			return "duplicate";
		}

		const placeholders = Array(columns.length).fill("?").join(",");
		const query = `INSERT INTO Ofertas_Empleo_Desglosado (${columns.join(",")}) VALUES (${placeholders})`;

		await postQuery(query, values)

		return ("added");
	}
	catch (err) {
		return ('error');
	}

};

module.exports = { insertInDatabase };