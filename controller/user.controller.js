const User = require('../model/user.model');
const Messages = require('../helpers/messages');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (user) {
            res.send({ message: Messages.USER_EXISTS });
        }
        let hashpassword = await bcrypt.hash(req.body.password, 10);
        user = await User.create({ ...req.body, password: hashpassword });
        res.send({ user, nessage: Messages.USER_ADDED });
    } catch (error) {
        console.log(error);
        res.send({ Message: Messages.INTERNAL_SERVER_ERR });
    }
}

exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (!user) {
            res.send({ message: Messages.USER_NOT_EXISTS });
        }
        let comparepassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparepassword) {
            res.send(Messages.PASS_INCORRECT);
        }
        let token = await jwt.sign({ userId: user._id }, process.env.JWT_SECREATE);
        res.send({ Messages: Messages.LOGIN_USER, "token": token });
    } catch (error) {
        console.log(error);
        res.send(Messages.INTERNAL_SERVER_ERR);
    }
}

exports.updateUser = async (req, res) => {
    try {
        let user = req.user;
        let nuser = await User.findByIdAndUpdate(user._id, { $set: req.body }, { new: true });
        res.send({ nuser, message: Messages.USER_UPDATE });
    } catch (error) {
        console.log(error);
        res.send(Messages.INTERNAL_SERVER_ERR);
    }
}

exports.homePage = async (req, res) => {
    try {
        let users = await User.find();
        res.send(users);
    } catch (error) {
        console.log(error);
        res.send(Messages.INTERNAL_SERVER_ERR);
    }
}
