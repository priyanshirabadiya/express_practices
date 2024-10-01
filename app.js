const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
let userRoutes = require('./router/user.routes')
let port = process.env.PORT;

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("database established success..."))
    .catch((err) => console.log(err));

app.use(express.json());
app.use("/user", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello this is priyanshi.");
});

app.listen(port, () => {
    console.log(`server start at http://localhost:${port} `);
});



