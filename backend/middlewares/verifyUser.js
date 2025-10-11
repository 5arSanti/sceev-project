const jwt = require("jsonwebtoken");

/**
 * Valida el token y agrega la info de usuario al request sin exigir autenticación estricta.
 * Útil para endpoints que sólo necesitan leer el usuario si existe.
 */
const handleUserInfo = (request, response, next) => {
	const token = request.cookies.authToken;

	if (!token) { return response.json({ Error: "Token no proporcionado" });  }

	jwt.verify(token, `${process.env.LOGIN_TOKEN}`, (err, decoded) => {
		if (err) {
			return response.status(401).json({ Error: "Error con el Token de autenticación" })
		}

		request.user = decoded;
		next();
	})
}

/**
 * Middleware de autenticación: exige token JWT válido.
 * Retorna 401 si no hay token o si es inválido.
 */
const verifyUser = (request, response, next) => {
	const token = request.cookies.authToken;

	if (!token) {
		return response.status(401).json({ Error: "No estas Autenticado" })
	}


	jwt.verify(token, `${process.env.LOGIN_TOKEN}`, (err, decoded) => {
		if (err) {
			return response.status(401).json({ Error: "Error con el Token de autenticación" })
		}

		request.user = decoded;
		next();
	})
}

module.exports = { verifyUser, handleUserInfo };