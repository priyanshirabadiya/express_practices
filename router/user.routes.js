const express = require('express');
const userrouter = express.Router();

const { addUser, loginUser } = require('../controller/user.controller');

userrouter.post("/register", addUser);

userrouter.get("/login", loginUser);

module.exports = userrouter;