// ----------------- Error handling middleware

// const express = require('express');
// const app = express();

// app.get("/", (req) => {
//     res.send("<h1>Welcome to the server..</h1>");
// })

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send("Some this broke...");
// })

// app.listen(1122, () => {
//     console.log('Server http://localhost:1122');
// });


// --------------- built-in middleware

// const express = require('express');
// const app = express();

// app.use(express.json());

// let myFun = (req, res, next) => {
//     console.log(req.headers);
//     console.log(req.body);
//     next();
// }

// app.post("/", myFun, (req, res) => {
//     res.setHeader('Content-type', 'application/json');
//     res.write("Welcome to server.");
//     res.end();
// })

// app.listen(1122, () => {
//     console.log('Server at http://localhost:1122 ');
// });

// --------------- second built-in middleware is url-encoded

// const express = require('express');
// const app = express();

// // when user enter data in x-www-form-urlencoded then it will be used to send data client side to server side in form of urlencoded 
// app.use(express.urlencoded({ extended: true }))

// const myFun = (req, res, next) => {
//     console.log(req.body);
//     next();
// }

// app.get("/", (req, res) => {
//     res.send("<h1>Hello this is Express.</h1>");
// })

// app.post("/login", myFun, (req, res) => {
//     res.setHeader('Content-type', 'application/json');
//     res.send("<h1>Welcome to loginPage.</h1>");
//     res.end();
// });

// app.listen(1122, () => {
//     console.log('Server at http://localhost:1122');
// })




// ----------------------------- express static middleware

const express = require('express');
const app = express();

app.use("/hello", express.static('public'));

app.get("/", (req, res) => {
    res.send("<h1>Hello this is home page.</h1>");
})

app.listen(1122, () => {
    console.log('Server http://localhost:1122');
})

