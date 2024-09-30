const User = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.getAll = async (req, res) => {
    try {
        let user = await User.find({ isDelete: false });
        res.send(user);
    } catch (error) {
        console.log(error);
    }
}

exports.addUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (user) {
            res.send({ message: "User already exists..." });
        }
        let hashpassword = await bcrypt.hash(req.body.password, 10);
        console.log(hashpassword);
        user = await User.create({ ...req.body, password: hashpassword });
        res.send({ user, message: "Added..." });
    } catch (error) {
        console.log(error);
        res.send("Internal server error...");
    }
}

exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (!user) {
            res.send("User dosen't exist...");
        }
        let comparepass = await bcrypt.compare(req.body.password, user.password);
        if (!comparepass) {
            res.send("Password or email does not match..");
        }

        // creating json web token
        let token = await jwt.sign({ userId: user._id }, process.env.JWT_SECREATE);
        res.status(200).send({ user, message: "User login success...", token });

    } catch (error) {
        console.log(error);
    }
}

exports.getSingleUser = async (req, res) => {
    try {
        res.send("Welcome to the server.");
    } catch (error) {
        console.log(error);
        res.send("Internal server error");
    }
}
