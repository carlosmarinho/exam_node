const product = require('../models/Product')
class ProductController {
    constructor() {
        this.product = require('../models/Product')

    }

    view(req, res, next) {
        if (!req.params.id) {
            res.status(400).json({"erro":"Bad Request"});
        }

        product.getProductById(req.params.id, function (err, rows) {
            if (err) {
                res.status(500).json(err);
            }
            else {
                res.status(200).json(rows);
            }
        });
    }

    viewAll(req, res, next) {

        product.getAllProducts(function (err, rows) {
            if (err) {
                res.status(500).json(err);
            }
            else {
                res.status(200).json(rows);
            }
        });
    }
}

module.exports = new ProductController();