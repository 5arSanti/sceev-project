const PropertiesReader = require("properties-reader");
const properties = PropertiesReader("./app.properties.ini")
const jwt = require("jsonwebtoken");



const verifyUser = (request, response, next) => {
	const token = request.cookies.authToken;

	if(!token) {
		return response.json({Error: "No estas Autenticado"})
	}


	jwt.verify(token, `${properties.get("app.login.token")}`, (err, decoded) => {
		if (err) {
			return response.json({Error: "Error con el Token de autenticación"})
		}

		request.user = decoded;
		next();
	})
}

module.exports = { verifyUser };