const { sql } = require(".");


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