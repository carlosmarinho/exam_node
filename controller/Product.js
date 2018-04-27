product = require('../models/Product')
class ProductController {
    constructor() {

    }

    view(req, res, next) {

        product.getAllProducts(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.status(200).json(rows);
            }
        });

        
    }
}

module.exports = new ProductController();