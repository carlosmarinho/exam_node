var db = require('../dbconnection'); //reference of dbconnection.js

var Product = {

    getAllProducts: function (callback) {
        return db.query("Select * from product", callback);
    },
    getProductById: function (id, callback) {
        return db.query("select * from product where Id=?", [id], callback);
    },
    addProduct: function (Product, callback) {
        console.log('produto: ', Product);
        return db.query("Insert into product (`name`, `price`, `photo`) values (?,?,?)", [Product.name, Product.price, Product.photo], callback);
    },
    deleteProduct: function (id, callback) {
        return db.query("delete from product where Id=?", [id], callback);
    },
    updateProduct: function (id, Product, callback) {
        return db.query("update product set name=?, price=?, photo=? where Id=?", [Product.name, Product.price, Product.photo, id], callback);
    }

};
module.exports = Product;