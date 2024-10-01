const express = require('express');
const {
    registerUser,
    loginUser,
    homePage,
    updateUser
} = require('../controller/user.controller');

const {
    addProducts,
    getAllProducts,
    updateProduct
} = require('../controller/product.controller');

const { verifyToken } = require('../helpers/verifyToken');
const { addToCart, updateCart, deleteCart, getAllCarts } = require('../controller/cart.controller');

const userRouter = express.Router();

// ------- user data
userRouter.post('/register', registerUser);
userRouter.get('/login', loginUser);
userRouter.get('/home', verifyToken, homePage);
userRouter.put('/update', verifyToken, updateUser);

// ------- product data
userRouter.post('/product/add', addProducts);
userRouter.get('/product/all', getAllProducts);
userRouter.put('/product/update', updateProduct);

// ------- cart data

userRouter.post('/cart/add', verifyToken, addToCart);
userRouter.put('/cart/update', verifyToken, updateCart);
userRouter.delete('/cart/delete', verifyToken, deleteCart);
userRouter.get('/cart/all', verifyToken, getAllCarts);

module.exports = userRouter;