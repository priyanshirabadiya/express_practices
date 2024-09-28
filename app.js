const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));

const myFun = (req, res, next) => {
    if (req.query.age > 18) {
        console.log("Success");
        res.send("<h1>Your age is greater than 18.</h1>");
    } else {
        next();
    }
};

// To apply in directly params: // http://localhost:1122/age/15
// app.use("/age/:age", myFun);

// app.get("/age/:age", (req, res) => {
//     res.write("<h1>Hello your age is less than 18.</h1>");
//     res.end();
// })

// To apply in query params
app.use("/", myFun);

app.get("/", (req, res) => {
    res.write("<h1>Hello your age is less than 18.</h1>");
    res.end();
});

app.listen(1122, () => {
    console.log("Server start at http://localhost:1122");
});
