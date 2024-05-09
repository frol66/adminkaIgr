const fs = require('fs').promises;
const mainRoute = require("express").Router();

mainRoute.get("/", (req, res) => {
    fs.readFile("./public/index.html", "utf8").then((data) => {
        res.header("Content-Type", "text/html").send(data);
    })
});

module.exports = mainRoute;