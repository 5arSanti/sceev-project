const express = require("express");

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./app.properties.ini');


const usersRouter = require("./users/index.js")

const authRouter = require("./auth")

const graphRouter = require("./graph/index.js")

const fileRouter = require("./file")

const filtersRouter = require("./filters")

const columnsRouter = require("./columns/index.js")

const versionRouter = require("./version/index.js");

const dataRouter = require("./data/index.js")

const ofertsRouter = require("./oferts/index.js");


const routerApi = (app) => {
	const router = express.Router();
	app.use(`/${properties.get("app.api.structure")}/v1`, router);

	// Routes
	router.use("/users", usersRouter);
	router.use("/auth", authRouter);

	router.use("/graph", graphRouter);

	router.use("/file", fileRouter);
	router.use("/filters", filtersRouter.router)

	router.use("/columns", columnsRouter);

	router.use("/version", versionRouter);

	router.use("/data", dataRouter);

	router.use("/oferts", ofertsRouter);
}

module.exports = routerApi;