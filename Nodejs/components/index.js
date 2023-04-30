var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
const path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
const expressLayouts = require('express-ejs-layouts');

// import Router file
var route = require('./Routes/route');

// View Engine path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1200000
    }
}));
app.use(session({ resave: false, saveUninitialized: true, secret: 'nodedemo' }));
app.use(flash());
app.use(expressLayouts);

// Layout Module 
app.set('layout', 'layout/layout');


app.use('/', route);

// Server Connect
http.listen(8000, function () {
    console.log('listening on *:8000');
});