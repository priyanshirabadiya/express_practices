const express = require('express');
const userRouter = express.Router();

const {
    addNewUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
} = require('../controller/user.controller')

userRouter.get("/all",getAllUsers);

userRouter.get("/single",getSingleUser);

userRouter.post("/add",addNewUser);

userRouter.put("/update",updateUser);

userRouter.delete("/delete",deleteUser)

module.exports = userRouter;