const express = require("express");
const userrouter = express.Router();

const {
    addUser,
    loginUser,
    getAll,
    getSingleUser
} = require("../controller/user.controller");
const { verifyToken } = require("../helpers/verifyToken");

userrouter.post("/register", addUser);

userrouter.get("/login", loginUser);

userrouter.get("/all", getAll);

userrouter.get("/single", verifyToken, getSingleUser );

module.exports = userrouter;
