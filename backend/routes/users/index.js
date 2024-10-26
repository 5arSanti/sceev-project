const express = require("express");
const { getQuery } = require("../../database/query");
const { connection } = require("../../database");


const router = express.Router();
const bcrypt = require("bcrypt");
const { validateObjectValues } = require("../../Utils/Validate/validateObjectValues");
const { validatePassword } = require("../../Utils/Validate/validatePassword");


router.get("/", async (request, response) => {
	try {
		const query = `
			SELECT
				Cedula_Usuario AS id,
				u.Nombre AS names,
				u.Apellidos AS surnames,
				u.Correo AS email,
				tu.Nombre AS userType

			FROM Usuarios u
			JOIN Tipo_Usuarios tu ON u.ID_Tipo_De_Usuario = tu.ID_Tipo_Usuarios
		`;

		const users = await getQuery(query)

		return response.json({users: users})
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

router.delete("/", async (request, response) => {
	try {
		const cedulaUsuario = request.body.id;

		const query = `DELETE FROM Usuarios WHERE Cedula_Usuario = ${cedulaUsuario}`;

		connection.query(query, (err) => {
			if(err) {
				return response.status(500).json({ Error: err.message });
			}

			return response.json({ Status: "Success", message: "Usuario eliminado correctamente" });
		});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

const salt = 10;
router.patch("/", async (request, response) => {
	try {
		const id = request.body.id;

		validateObjectValues(request.body);
		validatePassword(request.body.password, request.body.confirmPassword)

		const query = `
			UPDATE login
			SET name=?, email=?, password=?
			WHERE id = ?
		`;

		bcrypt.hash(request.body.password.toString(), salt, (err, hash) => {
			if (err) { return response.json({Error: "Error hashing password"}); }

			const values = [
				request.body.name,
				request.body.email,
				hash,
				id,
			]

			connection.query(query, [...values], (err) => {
				if(err) { return response.json({Error: "Error editando el usuario"}) }

				return response.json({Status: "Success", message: "Usuario editado correctamente"});
			});
		});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

router.get("/types", async (request, response) => {
	try {
		const userTypes = await getQuery(`
			SELECT
				ID_Tipo_Usuarios AS id,
				Nombre AS name
			FROM Tipo_Usuarios
		`);

		return response.status(200).json({userTypes: userTypes})
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
})

module.exports = router;