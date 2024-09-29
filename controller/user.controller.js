const User = require('../model/user.model');

exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        res.send(users);
    } catch (error) {
        console.log(error);
    }
}

exports.addNewUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ message: "User already exist.." });
        }
        const addUser = await User.create(req.body);
        res.status(200).json({ addUser, message: "User added successfully..." });
    } catch (error) {
        console.log(error);
    }
}

exports.getSingleUser = async (req, res) => {
    try {
        // let user = await User.findOne({ firstName: req.query.firstName });
        // let user = await User.findOne({ _id: req.query._userId });
        let user = await User.findById(req.query._userId);
        if (!user) {
            res.send("User not found...");
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
}

