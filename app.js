// ---------------------- connect with database mongodb 

const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const userrouter = require('./router/user.routes');
const path = require('path');
const ejs = require('ejs');

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database established success..."))
    .catch((err) => console.log(err))
    
app.use(morgan('dev'));
app.use(express.json());
// this is for open image file in browser
// app.use('/public/images', express.static(path.join(__dirname, 'public/images')));

app.use("/user", userrouter);

app.listen(1122, () => {
    console.log('Server http://localhost:1122');
})
