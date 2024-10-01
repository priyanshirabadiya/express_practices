const Message = require('../helpers/messages');
const Product = require('../model/product.model');

exports.addProducts = async (req, res) => {
    try {
        let addProduct = await Product.create(req.body);
        res.send({ message: Message.PRODUCT_ADDED, addProduct });
    } catch (error) {
        console.log(error);
        res.send({ messages: Message.INTERNAL_SERVER_ERR })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        let product = await Product.findOne({ _id: req.body._id, isDelete: false });
        if (!product) {
            return res.status(404).send({ message: "Product not found or already deleted" });
        }
        let nproduct = await Product.findByIdAndUpdate(product._id, { $set: req.body }, { new: true });
        res.send({ message: Message.PRODUCT_UPDATE, nproduct });
    } catch (error) {
        console.log(error);
        res.send({ messages: Message.INTERNAL_SERVER_ERR });
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        let products = await Product.find();
        res.send(products);
    } catch (error) {
        console.log(error);
        res.send({ messages: Message.INTERNAL_SERVER_ERR })
    }
}

