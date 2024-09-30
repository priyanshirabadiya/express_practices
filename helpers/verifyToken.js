const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

exports.verifyToken = async (req, res, next) => {
    try {
        // authorization is a token
        let authorization = req.headers['authorization'];
        if (!authorization) {
            res.send("not autorized person.");
        }
        console.log(authorization);
        let token = authorization.split(" ")[1];
        console.log(token);
        let { userId } = await jwt.verify(token, process.env.JWT_SECREATE)
        // console.log(userId);
        
        let user = await User.findOne({ _id: userId, isDelete: false })
        // console.log(user);
        
        if (!user) {
            res.status(404).send("User not found...");
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Internal server error.." });
    }
}




