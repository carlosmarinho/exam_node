var db = require('../dbconnection'); //reference of dbconnection.js

var Product = {

    getAllProducts: function (params, callback) {
        let where = null;
        let order = null;
        if(params.sort)
        {
            let sort = params.sort.split(',')
            let asc = sort[1].replace("]","").replace('"','').replace('"','');
            sort = sort[0].replace("[", "").replace('"','').replace('"','');
            console.log("aqui1: ", sort, "\n asc: ", asc );
            order = " order by " + sort + " " + asc
        }
        
        ret =  db.query("Select * from product" + order, callback);
        
        
        return ret;
    },
    getProductById: function (id, callback) {
        return db.query("select * from product where Id=?", [id], callback);
    },
    addProduct: function (product, callback) {
        return db.query("Insert into product (`name`, `price`, `photo`) values (?,?,?)", [product.name, product.price, product.photo], callback);
    },
    deleteProduct: function (id, callback) {
        return db.query("delete from product where Id=?", [id], callback);
    },
    updateProduct: function (id, product, callback) {
        return db.query("update product set name=?, price=?, photo=? where Id=?", [product.name, product.price, product.photo, id], callback);
    }

};
module.exports = Product;