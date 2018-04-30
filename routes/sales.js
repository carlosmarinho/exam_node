var express = require('express');
var router = express.Router();
var SaleController = require('../controller/Sale')

router.get('/vendaproduto', (req, res, next) => SaleController.vendaProduto(req, res, next) );
router.get('/vendaestado', (req, res, next) => SaleController.vendaEstado(req, res, next) );
router.get('/vendacidade', (req, res, next) => SaleController.vendaCidade(req, res, next) );
module.exports = router;