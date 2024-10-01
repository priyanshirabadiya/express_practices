const jwt = require('jsonwebtoken');
const Messages = require('../helpers/messages');
const User = require('../model/user.model');

exports.verifyToken = async (req, res, next) => {
    try {
        let authentication = req.headers['authorization'];
        // console.log(authentication);
        let token = authentication.split(" ")[1];
        let { userId } = await jwt.verify(token, process.env.JWT_SECREATE);
        let user = await User.findOne({ _id: userId, isDelete: false });
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.send(Messages.INTERNAL_SERVER_ERR);
    }
}
