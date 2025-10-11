import { handleNotifications } from "../handleNotifications";

/**
 * Garantiza que un objeto no contenga valores null ni cadenas vacías (cliente).
 * @param {Record<string, any>} values
 * @param {string} [message]
 */
const validateObjectValues = (values, message="No pueden haber campos vacios") => {
	try {
		const arrayValues = Object.values(values);
		const filterConditions = arrayValues.some((key) => key === null || key == "");

		if (filterConditions) {
			throw new Error(message)
		}
	} catch (err) {
		throw Error(err)
	}

}

export { validateObjectValues };