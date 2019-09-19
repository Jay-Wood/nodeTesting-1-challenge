const express = require("express");
const server = express();
const guitarsRouter = require("./guitars/guitarsRouter.js");

server.use(express.json());

server.use("/guitars", guitarsRouter);

server.get("/", (req, res) => {
    res.send("Server is up!")
})

module.exports = server;