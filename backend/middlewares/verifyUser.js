const jwt = require("jsonwebtoken");

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