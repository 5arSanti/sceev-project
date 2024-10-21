const express = require("express");
const { validateObjectValues } = require("../../Utils/validateObjectValues");
const { validatePassword } = require("../../Utils/validatePassword");
const { verifyUser } = require("../../middlewares/verifyUser");
const { getQuery } = require("../../database/query");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./app.properties.ini');

const router = express.Router();

const salt = 10;


router.get("/", verifyUser, (request, response) => {
	try {
		return response.status(200).json({Status: "Success", ...request.user});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

router.get("/logout", (request, response) => {
	try {
		response.clearCookie("authToken")
		return response.json({Status: "Success", message: "Sesion Cerrada Correctamente"});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}

})


router.post("/login", async (request, response) => {
	try {
		validateObjectValues(request.body);

		const { email, password } = request.body;

		const query = `SELECT * FROM Usuarios WHERE Correo = '${email}'`;

		const dbUser = await getQuery(query);

		if (dbUser.length == 0) {
			return response.json({ Error: "El usuario no está registrado." });
		}

		const passStatus = await bcrypt.compare(password.toString(), dbUser[0].Contraseña);

		if(!passStatus) { return response.status(404).json({ Error: "La contraseña es incorrecta" }); }


		const user = dbUser[0];
		const token = jwt.sign({user: user}, `${properties.get("app.login.token")}`, {expiresIn: "1d"});
		response.cookie("authToken", token);

		return response.json({ Status: "Success", message: "Sesión iniciada correctamente"});

	} catch (err) {
		return response.json({Error: err.message})
	}
});


router.post("/register", async (request, response) => {
	try {
		validateObjectValues(request.body);

		const { id, name, surnames, email, password, confirmPassword, userType } = request.body;

		validatePassword(password, confirmPassword);

		const dbUser = await getQuery(`SELECT * FROM Usuarios WHERE Cedula_Usuario = ${id} OR Correo = '${email}'`);

		if(dbUser.length !== 0) { return response.json({Error: "El usuario con este numero de cedula o correo ya esta registrado"}); }

		const hash = await bcrypt.hash(password.toString(), salt);

		const query = `
			INSERT INTO Usuarios (Cedula_Usuario, Nombre, Apellidos, Correo, Contraseña, ID_Tipo_De_Usuario)
			VALUES
			(${id},'${name}', '${surnames}', '${email}', '${hash}', ${userType})
		`;

		await getQuery(query);

		return response.json({Status: "Success", message: "Usuario creado correctamente"});
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});





module.exports = router;