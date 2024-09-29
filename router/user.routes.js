const express = require('express');
const userRouter = express.Router();

const {
    addNewUser,
    getAllUsers,
    getSingleUser
} = require('../controller/user.controller')

userRouter.get("/all",getAllUsers);

userRouter.get("/single",getSingleUser);

userRouter.post("/add",addNewUser);

module.exports = userRouter;