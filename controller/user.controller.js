const User = require('../model/user.model');
const Messages = require('../helpers/messages');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (user) {
            res.send({ message: Messages.USER_EXISTS });
        }
        let hashpassword = await bcrypt.hash(req.body.password , 10);
        user = await User.create({ ...req.body, password: hashpassword });
        res.send({ user, nessage: Messages.USER_ADDED });
    } catch (error) {
        console.log(error);
        res.send({ Message: Messages.INTERNAL_SERVER_ERR });
    }
}

exports.loginUser = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.send(Messages.INTERNAL_SERVER_ERR);
    }
}
