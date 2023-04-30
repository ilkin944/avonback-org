const express = require('express');
const route = express.Router();

// import controller
var AuthController = require('./../controllers/AuthController');

// Auth Pages
route.get('/login', (req, res, next) => {
    res.render('Auth/login', { title: 'Login', layout: false, 'message': req.flash('message'), 'error': req.flash('error') })
})
route.post('/login', AuthController.signin);

// Dashboard Pages
route.get('/', (req, res, next) => {
    res.render('index', { title: 'Dashboard', layout: 'layout/layout-without-nav' });
})
route.get('/index', (req, res, next) => {
    res.render('index', { title: 'Dashboard', layout: 'layout/layout-without-nav' });
})

// Product Pages
route.get('/product-list', (req, res, next) => {
    res.render('product-list', { title: 'Product List', page_title: 'Product List', folder: 'Products' });
})
route.get('/product-grid', (req, res, next) => {
    res.render('product-grid', { title: 'Product Grid', page_title: 'Product Grid', folder: 'Products' });
})
route.get('/product-overview', (req, res, next) => {
    res.render('product-overview', { title: 'Overview', page_title: 'Overview', folder: 'Products' });
})
route.get('/product-create', (req, res, next) => {
    res.render('product-create', { title: 'Create product', page_title: 'Create product', folder: 'Products' });
})
route.get('/categories', (req, res, next) => {
    res.render('categories', { title: 'Categories', page_title: 'Categories', folder: 'Products' });
})
route.get('/sub-categories', (req, res, next) => {
    res.render('sub-categories', { title: 'Sub Categories', page_title: 'Sub Categories', folder: 'Products' });
})

// Order Pages
route.get('/orders-list-view', (req, res, next) => {
    res.render('orders-list-view', { title: 'List View', page_title: 'List View', folder: 'Orders' });
})
route.get('/orders-overview', (req, res, next) => {
    res.render('orders-overview', { title: 'Overview', page_title: 'Overview', folder: 'Orders' });
})

// calendar Page 
route.get('/calendar', (req, res, next) => {
    res.render('calendar', { title: 'Calendar', page_title: 'Calendar', folder: 'Calendar' });
})

// Sellers Pages 
route.get('/sellers-list-view', (req, res, next) => {
    res.render('sellers-list-view', { title: 'List View', page_title: 'List View', folder: 'Sellers' });
})
route.get('/sellers-grid-view', (req, res, next) => {
    res.render('sellers-grid-view', { title: 'Grid View', page_title: 'Grid View', folder: 'Sellers' });
})
route.get('/seller-overview', (req, res, next) => {
    res.render('seller-overview', { title: 'Grid View', layout: 'layout/layout-without-nav' });
})

// Invoice Pages
route.get('/invoices-list', (req, res, next) => {
    res.render('invoices-list', { title: 'Invoice List', page_title: 'Invoice List', folder: 'Invoices' });
})
route.get('/invoices-details', (req, res, next) => {
    res.render('invoices-details', { title: 'Invoice List', page_title: 'Invoice List', folder: 'Invoices' });
})
route.get('/invoices-create', (req, res, next) => {
    res.render('invoices-create', { title: 'Create Invoice', page_title: 'Create Invoice', folder: 'Invoices' });
})

// User List Page
route.get('/users-list', (req, res, next) => {
    res.render('users-list', { title: 'Users List', page_title: 'Users List', folder: 'Users List' });
})

// Shipping Pages
route.get('/shipping-list', (req, res, next) => {
    res.render('shipping-list', { title: 'Users List', page_title: 'Users List', folder: 'Users List' });
})
route.get('/shipments', (req, res, next) => {
    res.render('shipments', { title: 'Shipments', page_title: 'Shipments', folder: 'Toner' });
})

// Coupons page
route.get('/coupons', (req, res, next) => {
    res.render('coupons', { title: 'Coupons', page_title: 'Coupons', folder: 'Toner' });
})

// Reviews Ratings page
route.get('/reviews-ratings', (req, res, next) => {
    res.render('reviews-ratings', { title: 'Reviews & Ratings', page_title: 'Reviews & Ratings', folder: 'Reviews & Ratings' });
})

// Brands page
route.get('/brands', (req, res, next) => {
    res.render('brands', { title: 'Brands', page_title: 'Brands', folder: 'Toner' });
})

// Statistics page
route.get('/statistics', (req, res, next) => {
    res.render('statistics', { title: 'Statistics', page_title: 'Statistics', folder: 'Toner' });
})

// Localization page
route.get('/transactions', (req, res, next) => {
    res.render('transactions', { title: 'Transactions', page_title: 'Transactions', folder: 'Toner' });
})
route.get('/currency-rates', (req, res, next) => {
    res.render('currency-rates', { title: 'Currency Rates', page_title: 'Currency Rates', folder: 'Toner' });
})


// Account Pages
route.get('/account', (req, res, next) => {
    res.render('account', { title: 'My Account', page_title: 'My Account', folder: 'Accounts' });
})
route.get('/account-settings', (req, res, next) => {
    res.render('account-settings', { title: 'Settings', page_title: 'Settings', folder: 'Accounts' });
})
route.get('/auth-signup-basic', (req, res, next) => {
    res.render('auth-signup-basic', { title: 'Sign Up', layout: false });
})
route.get('/auth-signin-basic', (req, res, next) => {
    res.render('auth-signin-basic', { title: 'Sign In', layout: false });
})
route.get('/auth-pass-reset-basic', (req, res, next) => {
    res.render('auth-pass-reset-basic', { title: 'Reset Passowrd', layout: false });
})
route.get('/auth-pass-change-basic', (req, res, next) => {
    res.render('auth-pass-change-basic', { title: 'Change Passowrd', layout: false });
})
route.get('/auth-success-msg-basic', (req, res, next) => {
    res.render('auth-success-msg-basic', { title: 'Success Message', layout: false });
})
route.get('/auth-twostep-basic', (req, res, next) => {
    res.render('auth-twostep-basic', { title: 'Two Step Verification', layout: false });
})
route.get('/auth-logout-basic', (req, res, next) => {
    res.render('auth-logout-basic', { title: 'Log Out', layout: false });
})
route.get('/auth-404', (req, res, next) => {
    res.render('auth-404', { title: '404', layout: false });
})
route.get('/auth-500', (req, res, next) => {
    res.render('auth-500', { title: '500', layout: false });
})
route.get('/coming-soon', (req, res, next) => {
    res.render('coming-soon', { title: 'Coming Soon', layout: false });
})


module.exports = route;