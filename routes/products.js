var express = require('express');
var router = express.Router();
var ProductController = require('../controller/Product')

router.get('/', (req, res, next) => ProductController.viewAll(req, res, next) );
router.get('/:id?', (req, res, next) => ProductController.view(req, res, next) );
router.post('/', (req, res, next) => ProductController.add(req, res, next));
router.delete('/:id', (req, res, next) => ProductController.remove(req, res, next));
router.put('/:id', (req, res, next) => ProductController.updateProduct(req, res, next));
module.exports = router;