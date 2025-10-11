const { insertInDatabase } = require("../insertInDatabase");


/**
 * Procesa línea por línea un stream `readline.Interface` e inserta en DB.
 * Acumula resultados y retorna conteos agregados.
 * @param {import('readline').Interface} rl
 * @param {string[]} columns
 * @returns {Promise<{addedRows:number, duplicateRows:number, errorRows:number}>}
 */
const readLine = (rl, columns) => {
	return new Promise((resolve, reject) => {
		const rows = [];
		const promises = [];

        rl.on('line', async (line) => {
            try {
                const values = line.split('|$$|');
                const insertPromise = insertInDatabase(values, columns)
					.then(result => rows.push(result))
					.catch(() => rows.push('error'));
				promises.push(insertPromise);

            }
			catch (err) {
                rows.push('error');
            }
        });

		rl.on('close', async () => {
			await Promise.all(promises);

			const addedRows = rows.filter(result => result === 'added').length;
			const duplicateRows = rows.filter(result => result === 'duplicate').length;
			const errorRows = rows.filter(result => result === 'error').length;

			resolve({ addedRows, duplicateRows, errorRows });
		});

        rl.on('error', (err) => {
            reject(err);
        });
    });
}

module.exports = { readLine };