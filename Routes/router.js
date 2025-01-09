const routes = require("express").Router();

const post = require("./post");
const user = require("./user");

routes.use("/", post);
routes.use("/", user);

module.exports = routes;
