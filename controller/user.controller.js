const User = require('../model/user.model');
const bcrypt = require('bcrypt');

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
        res.status(200).send({ user, message: "User login success..." });
    } catch (error) {
        console.log(error);
    }
}
