/**
 * Convierte un arreglo de objetos con clave `index` en una cadena separada por comas.
 * @param {{index: string|number}[]} array
 * @returns {string}
 */
const arrayToString = (array) => {
	if (array.length == 0) { return ""; }

	return array.map((item) => item.index).join(", ");
}

module.exports = { arrayToString };