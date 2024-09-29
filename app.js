// ---------------------- crud operation = create , read , update and delete

const express = require('express');
const app = express();
const User = require('./dummy.json');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.json());

// create user and post user

app.get("/user", (req, res) => {
    User.push(req.body);
    res.send({ message: "User added successfully...", User });
})

// update data

app.put("/user/:id", (req, res) => {
    let Id = +req.params.id;
    let userIndex = User.findIndex((user) => user.id === Id);
    // res.send(userIndex);
    User.splice(userIndex, 1, req.body);
    res.send(User);
})


// it will don't replace-fully just edit what you add new data
app.patch("/user/:id", (req, res) => {
    let id = +req.params.id;
    let userIndex = User.findIndex((item) => item.id === id);
    let user = User[userIndex];
    User.splice(userIndex, 1, { ...user, ...req.body });
    // res.json({ message: "user updated successfully..." });
    res.send(User);
})

app.delete("/user/:id", (req, res) => {
    let id = +req.params.id;
    let userIndex = User.findIndex((user) => user.id === id);
    User.splice(userIndex, 1);
    res.send(User);
})

app.listen(1122, () => {
    console.log('Server http://localhost:1122');
})
