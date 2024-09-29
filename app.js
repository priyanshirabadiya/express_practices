// ---------------------- crud operation using router

const express = require('express');
const app = express();
const User = require('./dummy.json');
const morgan = require('morgan');
const productrouter = require('./router/product.routes')

app.use(morgan('dev'));
app.use(express.json());

app.use("/product", productrouter)

app.listen(1122, () => {
    console.log('Server http://localhost:1122');
})
