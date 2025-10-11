const moment = require("moment");

/**
 * Retorna la fecha/hora actual formateada dd/mm/yyyy hh:mm:ss.
 * @returns {string}
 */
const getDate = () => {
	const date = new Date();

	const actualDate = moment(date).format("DD/MM/YYYY hh:mm:ss");

	return(actualDate);
}

module.exports = { getDate }