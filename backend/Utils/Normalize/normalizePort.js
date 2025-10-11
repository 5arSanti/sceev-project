/**
 * Normaliza el valor del puerto a número, nombre de pipe o false.
 * @param {string|number} val
 * @returns {number|string|false}
 */
const normalizePort = (val) => {
	let port = parseInt(val, 10);

	if (isNaN(port)) {
		return val;
	}

	if (port >= 0) {
		return port;
	}

	return false;
}


module.exports = { normalizePort };