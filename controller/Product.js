product = require('../models/Product')
class ProductController{
    constructor(){

    }

    view(req, res, next){
        console.log("vai executar o view do productController");
        res.json({"id":1});
    }
}

module.exports = new ProductController();