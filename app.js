const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>This is homr page.</h1>");
    res.end();
});

app.get("/user", (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>This is userY page.</h1>");
    res.end();
});

app.listen(1155, () => {
    console.log("Server at http://localhost:1155");
});



