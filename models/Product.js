var db = require('../dbconnection'); //reference of dbconnection.js


var Product = {

    getAllProducts: function (params, callback) {
        let where = "";
        let order = "";
        if(params.sort)
        {
            let sort = params.sort.split(',')
            let asc = sort[1].replace("]","").replace('"','').replace('"','');
            sort = sort[0].replace("[", "").replace('"','').replace('"','');
            
            order = " order by " + sort + " " + asc
        }

        if(params.filter && params.filter !== "{}")
        {
                let filter = params.filter.split(':')
                filter = filter[1].replace("}","").replace('"','').replace('"','');
                /*@todo colocar a query parametrizada com ?*/
                where = " where `name` like '" + filter + "%' ";
        }
        
        let sql = "Select * from product" + where + order;
        ret =  db.query(sql, callback);
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