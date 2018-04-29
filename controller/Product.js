const product = require('../models/Product')
class ProductController {
    constructor() {
        this.product = require('../models/Product')

    }

    remove(req, res, next) {
        product.deleteProduct(req.params.id, function (err, count) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(count);
            }

        });
    }

    add(req, res, next) {
        let prod = {
            name: req.body.name,
            price: req.body.price,
            photo: req.body.photo
        };

        product.addProduct(prod, function (err, count) {
            if (err) {
                res.status(500).json(err);
            }
            else {
                res.status(200).json(req.body);//or return count for 1 &amp;amp;amp; 0
            }
        });
    }

    update(req, res, next) {
        product.updateProduct(req.params.id, req.body, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }

    view(req, res, next) {
        if (!req.params.id) {
            res.status(400).json({ "erro": "Bad Request" });
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