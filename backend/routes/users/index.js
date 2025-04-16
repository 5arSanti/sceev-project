const express = require("express");
const { getQuery } = require("../../database/query");

const router = express.Router();

const { validateObjectValues } = require("../../Utils/Validate/validateObjectValues");
const { verifyUser } = require("../../middlewares/verifyUser");


router.get("/", verifyUser, async (request, response) => {
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

		return response.json({ users: users })
	}
	catch (err) {
		return response.json({ Error: err.message })
	}
});

router.delete("/", verifyUser, async (request, response) => {
	try {
		const cedulaUsuario = request.body.id;

		const query = `DELETE FROM Usuarios WHERE Cedula_Usuario = ${cedulaUsuario}`;

		await getQuery(query);

		return response.json({ Status: "Success", message: "Usuario eliminado correctamente" });
	}
	catch (err) {
		return response.status(500).json({ Error: err.message });
	}
});

router.patch("/", verifyUser, async (request, response) => {
	try {
		const { id, names, surnames, userTypeId } = request.body;

		validateObjectValues(request.body);

		const query = `
			UPDATE Usuarios
			SET Nombre = ${names}, Apellidos = ${surnames}, ID_Tipo_De_Usuario = ${userTypeId}
			WHERE Cedula_Usuario = ${id}
		`;

		await getQuery(query)

		return response.status(200).json({ Status: "Success", message: "Usuario actualizado correctamente" });
	}
	catch (err) {
		return response.status(500).json({ Error: err.message });
	}
});

router.get("/types", verifyUser, async (request, response) => {
	try {
		const userTypes = await getQuery(`
			SELECT
				ID_Tipo_Usuarios AS id,
				Nombre AS name
			FROM Tipo_Usuarios
		`);

		return response.status(200).json({ userTypes: userTypes })
	}
	catch (err) {
		return response.status(500).json({ Error: err.message });
	}
})

module.exports = router;