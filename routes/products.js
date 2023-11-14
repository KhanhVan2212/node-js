const express = require('express');
const router = express.Router();

const productsController = require('../controllers/ProductsController')
router.get('/create', productsController.createProduct)
router.get('/', productsController.getAllProducts)
router.get('/slug', productsController.getProductDetail)
router.post('/store', productsController.storeProduct)

module.exports = router;