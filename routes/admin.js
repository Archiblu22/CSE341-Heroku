const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const { title } = require('process');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

// /admin/remove-product => GET
router.get('/remove-product', (req, res, next) => {
    res.render('remove-product', {
      pageTitle: 'Remove Product',
      path: '/admin/remove-product',
      formsCSS: true,
      productCSS: true,
      activeRemoveProduct: true
    });
});

// /admin/remove-product => POST
router.post('/remove-product', (req, res, next) => {
    products = products.filter(product => product !== {title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
