const { postQuery, getQuery } = require("../database/query");


/**
 * Inserta una fila en `Ofertas_Empleo_Desglosado` si no existe por `CODIGO_VACANTE`.
 * Rellena valores faltantes con null y usa placeholders seguros.
 * @param {any[]} values - Valores de la fila a insertar
 * @param {string[]} columns - Columnas objetivo
 * @returns {Promise<'added'|'duplicate'|'error'>}
 */
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