const express = require('express');
const route = express.Router();

// import controller
var AuthController = require('./../controllers/AuthController');

// Auth Pages
route.get('/login', (req, res, next) => {
    res.render('Auth/login', { title: 'Login', layout: false })
})
route.post('/login', AuthController.signin);

// Dashboard Pages
route.get('/', (req, res, next) => {
    res.render('index', { title: 'Index' });
})
route.get('/index', (req, res, next) => {
    res.render('index', { title: 'Index' });
})

// Catalog pages
route.get('/product-grid-sidebar-banner', (req, res, next) => {
    res.render('product-grid-sidebar-banner', { title: 'Product Sidebar with Banner' });
})
route.get('/product-grid-right', (req, res, next) => {
    res.render('product-grid-right', { title: 'Product Grid Right Sidebar' });
})
route.get('/product-list-left', (req, res, next) => {
    res.render('product-list-left', { title: 'List Left Sidebar' });
})
route.get('/product-list', (req, res, next) => {
    res.render('product-list', { title: 'Product List No Sidebar' });
})
route.get('/product-list-right', (req, res, next) => {
    res.render('product-list-right', { title: 'List Right Sidebar' });
})
route.get('/product-list-defualt', (req, res, next) => {
    res.render('product-list-defualt', { title: 'Product List' });
})
route.get('/product-grid-defualt', (req, res, next) => {
    res.render('product-grid-defualt', { title: 'Product Grid' });
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
route.get('/auth-404', (req, res, next) => {
    res.render('auth-404', { title: '404', layout: false });
})

// Shop Pages
route.get('/address', (req, res, next) => {
    res.render('address', { title: 'Address' });
})
route.get('/track-order', (req, res, next) => {
    res.render('track-order', { title: 'Delivery' });
})
route.get('/payment', (req, res, next) => {
    res.render('payment', { title: 'Payment' });
})
route.get('/review', (req, res, next) => {
    res.render('review', { title: 'Customer Review' });
})
route.get('/confirmation', (req, res, next) => {
    res.render('confirmation', { title: 'Order Completed' });
})
route.get('/order-history', (req, res, next) => {
    res.render('order-history', { title: 'Order History' });
})
route.get('/shop-cart', (req, res, next) => {
    res.render('shop-cart', { title: 'Shop Cart' });
})
route.get('/checkout', (req, res, next) => {
    res.render('checkout', { title: 'Checkout' });
})
route.get('/wishlist', (req, res, next) => {
    res.render('wishlist', { title: 'Wishlist' });
})

// Pages
route.get('/about-us', (req, res, next) => {
    res.render('about-us', { title: 'About Us' });
})
route.get('/account', (req, res, next) => {
    res.render('account', { title: 'My Account' });
})
route.get('/auth-500', (req, res, next) => {
    res.render('auth-500', { title: '500', layout: false });
})
route.get('/auth-logout-basic', (req, res, next) => {
    res.render('auth-logout-basic', { title: 'Log Out', layout: false });
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
route.get('/coming-soon', (req, res, next) => {
    res.render('coming-soon', { title: 'Coming Soon', layout: false });
})
route.get('/contact-us', (req, res, next) => {
    res.render('contact-us', { title: 'Starter' });
})
route.get('/ecommerce-faq', (req, res, next) => {
    res.render('ecommerce-faq', { title: 'Review' });
})
route.get('/email-black-friday', (req, res, next) => {
    res.render('email-black-friday', { title: 'Black Friday Email Template', layout: false });
})
route.get('/email-flash-sale', (req, res, next) => {
    res.render('email-flash-sale', { title: 'Flash Sale Email Template', layout: false });
})
route.get('/email-order-success-2', (req, res, next) => {
    res.render('email-order-success-2', { title: 'Order Success 2 Email Template', layout: false });
})
route.get('/email-order-success', (req, res, next) => {
    res.render('email-order-success', { title: 'Order Success Email Template', layout: false });
})
route.get('/invoice', (req, res, next) => {
    res.render('invoice', { title: 'Invoice Overview' });
})
route.get('/pages-starter', (req, res, next) => {
    res.render('pages-starter', { title: 'Starter' });
})
route.get('/privacy-policy', (req, res, next) => {
    res.render('privacy-policy', { title: 'Privacy Policy' });
})
route.get('/product-details', (req, res, next) => {
    res.render('product-details', { title: 'Product Details' });
})
route.get('/product-grid', (req, res, next) => {
    res.render('product-grid', { title: 'Product Grid No Sidebar' });
})
route.get('/products-category', (req, res, next) => {
    res.render('products-category', { title: 'Products Category' });
})
route.get('/purchase-guide', (req, res, next) => {
    res.render('purchase-guide', { title: 'Purchase Guide' });
})
route.get('/store-locator', (req, res, next) => {
    res.render('store-locator', { title: 'Store Locator' });
})
route.get('/terms-conditions', (req, res, next) => {
    res.render('terms-conditions', { title: 'Terms of Conditions' });
})

module.exports = route;