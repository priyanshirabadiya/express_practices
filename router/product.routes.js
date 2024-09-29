const express = require('express');
const Product = require('../product.json');
const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
    res.send(Product);
})

userRoutes.post("/add", (req, res) => {
    Product.push(req.body);
    res.send(Product);
})

userRoutes.put("/update/:id", (req, res) => {
    let id = +req.params.id;
    let producIndex = Product.findIndex((item) => item.id === id);
    Product.splice(producIndex, 1, req.body);
    res.send(Product);
})


userRoutes.patch('/update/:id', (req, res) => {
    let id = +req.params.id;
    let productIndex = Product.findIndex((item) => item.id === id);
    let mainProduct = Product[productIndex];
    Product.splice(productIndex, 1, { ...mainProduct, ...req.body });
    res.send(Product);
})


module.exports = userRoutes;
