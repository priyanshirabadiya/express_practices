// ---------------------- crud operation = create , read

const express = require('express');
const app = express();
const User = require('./dummy.json');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

// create operation

// app.get("/", (req, res) => {
//     User.push(req.body);
//     // res.send("User added successfully...");
//     res.send(User);
// });


// get all users 

// app.get("/", (req, res) => {
//     // res.json(User);
//     res.send(User);
// })

// get only one perticular user

app.get("/user/:id", (req, res) => {
    let Id = +req.params.id;
    let user = User.find((user) => user.id === Id);
    res.send(user);
})

app.listen(1122, () => {
    console.log('Server http://localhost:1122');
})

