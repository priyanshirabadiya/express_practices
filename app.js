const express = require("express");
const app = express();
const fs = require('fs');
const data = fs.readFileSync('./dummy.json', 'utf-8');

app.get("/", (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>This is server.</h1>");
    res.end();
})

app.get("/data", (req, res) => {
    res.setHeader("Content-type", "application/json")
    res.write(data);
    res.end();
})

app.post("/data", (req, res) => {
    res.setHeader("Content-type", "application/json")
    res.write(data);
    res.end();
})

app.patch("/", (req, res) => {
    res.send("This is patch method.");
    res.end();
})

app.delete("/", (req, res) => {
    res.send("This is delete method.");
    res.end();
})

app.listen(1122, (req, res) => {
    console.log("Server at http://localhost:1122");
})
