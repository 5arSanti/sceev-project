const express = require("express");

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./app.properties.ini');


const usersRouter = require("./users/index.js")
const authRouter = require("./auth")

const graphRouter = require("./graph/index.js")


const fileRouter = require("./file")

const columnsRouter = require("./columns/index.js")


const routerApi = (app) => {
	const router = express.Router();
	app.use(`/${properties.get("app.api.structure")}/v1`, router);

	// Routes
	router.use("/users", usersRouter);
	router.use("/auth", authRouter)

	router.use("/graph", graphRouter);


	router.use("/file", fileRouter);

	router.use("/columns", columnsRouter);
}

module.exports = routerApi;