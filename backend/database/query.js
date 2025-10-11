const { sql } = require(".");


/**
 * Ejecuta una consulta SELECT y retorna el recordset.
 * @param {string} query - Consulta SQL a ejecutar
 * @returns {Promise<any[]>} - Filas obtenidas de la base de datos
 */
const getQuery = (query) => {
    return new Promise((resolve, reject) => {
        sql.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.recordset);
            }
        });
    });
}

/**
 * Ejecuta una consulta de escritura usando placeholders.
 * @param {string} query - Consulta SQL con placeholders (?)
 * @param {any[]} values - Valores a inyectar en la consulta
 * @returns {Promise<any[]>} - Resultado del registro insertado/actualizado
 */
const postQuery = (query, values) => {
    return new Promise((resolve, reject) => {
        sql.query(query, [values], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results.recordset);
            }
        });
    });
}

module.exports = { getQuery, postQuery };