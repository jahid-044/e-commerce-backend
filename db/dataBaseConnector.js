const mongoose = require('mongoose');
const { environment } = require('../config/config');
const { productSchema } = require('./schema/productSchema');
const { shopSchema } = require('./schema/shopSchema');
const { userSchema } = require('./schema/userSchema');
const env = process.env.NODE_ENV || "development";


mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let database = mongoose.connection;
database.on('error', ()=> {
    console.log("Error in connection");
});

const users = mongoose.model('user',userSchema);
const products = mongoose.model('product',productSchema);
const shops =mongoose.model('shop',shopSchema);

export {users, products,shops};

