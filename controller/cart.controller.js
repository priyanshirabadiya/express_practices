const Cart = require('../model/cart.model');
const Messages = require('../helpers/messages');

exports.addToCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({
            user: req.user._id,
            product: req.body.product,
            isDelete: false
        });
        if (cart) {
            res.send({ message: Messages.ALREADY_CART_MESSAGE });
        }
        cart = await Cart.create({ user: req.user._id, ...req.body });
        res.status(200).send({ message: Messages.ADDED_TO_CART });
    } catch (error) {
        console.log(error);
        res.send({ message: Messages.INTERNAL_SERVER_ERR });
    }
}

exports.updateCart = async (req, res) => {
    try {
        let userId = await req.user._id;
        let cartId = await req.body.cartId;

        let cart = await Cart.findOne({ _id: cartId, user: userId, isDelete: false });
        if (!cart) {
            return res.json({ message: "Cart not found" });
        }
        let updatecart = await Cart.findByIdAndUpdate(cartId, { $set: req.body }, { new: true });
        // console.log(updatecart);
        res.send({ message: Messages.CART_UPDATE, updatecart });

    } catch (error) {
        console.log(error);
        res.send({ message: Messages.INTERNAL_SERVER_ERR });
    }
}

exports.deleteCart = async (req, res) => {
    try {
        let cartId = await req.body.cartId;
        let cart = await Cart.findByIdAndUpdate(cartId, { isDelete: true });
        res.send({ message: Messages.REMOVE_FROM_CART, cart });
    } catch (error) {
        console.log(error);
        res.send({ message: Messages.INTERNAL_SERVER_ERR });
    }
}

exports.getAllCarts = async (req, res) => {
    try {
        let carts = await Cart.find({ isDelete: false });
        res.send({ carts });
    } catch (error) {
        console.log(error);
        res.send({ message: Messages.INTERNAL_SERVER_ERR });
    }
}
