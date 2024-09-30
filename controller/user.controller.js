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

// ------------- Lec - 15 add image on profile

exports.addUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (user) {
            res.send({ message: "User already exists..." });
        }
        let hashpassword = await bcrypt.hash(req.body.password, 10);
        // console.log(hashpassword);
        let imagePath = '';
        if (req.file) {
            console.log('Uploaded File:', req.file);
            console.log("Path is:", req.file.path);
            imagePath = req.file.path.replace(/\\/g, "/");
            console.log("new path", imagePath);
        } else {
            console.log('No file uploaded');
        }
        user = await User.create({
            ...req.body,
            password: hashpassword,
            profileImage: imagePath
        });
        res.send({ user, message: "Added..." });
    } catch (error) {
        console.log(error);
        res.send("Internal server error...");
    }
}

// -----------------------------------------

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

exports.updateUser = async (req, res) => {
    try {
        let user = req.user;
        if (!user) {
            res.send("User not found..");
        }
        user = await User.findByIdAndUpdate(user._id, { $set: req.body }, { new: true });
        res.send({ message: "User updated successfully.." });
    } catch (error) {
        console.log(error);
        res.send("Internal server error..");
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let user = req.user;
        if (!user) {
            res.send("User not found");
        }
        let updateduser = await User.findByIdAndUpdate(user._id, { isDelete: true }, { new: true });
        res.send({ updateduser, message: "User deleted success.." });
    } catch (error) {
        console.log(error);
        res.send("Internal server error..");
    }
}







