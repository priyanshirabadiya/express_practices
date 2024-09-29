const Product = require('../product.json');

exports.getAllProducts = (req, res) => {
    res.send(Product);
}

exports.addnewProduct = (req, res) => {
    Product.push(req.body);
    res.send(Product);
}

exports.updateProduct = (req, res) => {
    let id = +req.params.id;
    let producIndex = Product.findIndex((item) => item.id === id);
    Product.splice(producIndex, 1, req.body);
    res.send(Product);
}

exports.updateProductPatch = (req, res) => {
    let id = +req.params.id;
    let productIndex = Product.findIndex((item) => item.id === id);
    let mainProduct = Product[productIndex];
    Product.splice(productIndex, 1, { ...mainProduct, ...req.body });
    res.send(Product);
}

exports.deleteProduct = (req, res) => {
    let id = +req.params.id;
    let productIndex = Product.findIndex((item) => item.id === id);
    Product.splice(productIndex, 1);
    res.send(Product);
}
