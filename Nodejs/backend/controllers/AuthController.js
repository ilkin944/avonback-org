let users = [
    { id: 1, username: 'admin', password: '123456', email: 'admin@themesbrand.com' }
];

// Create Login
exports.signin = async (req, res) => {
    const validUser = users.filter(usr => usr.username === req.body.username && usr.password === req.body.password);
    if (validUser['length'] === 1) {
        // Assign value in session
        sess = req.session;
        sess.user = validUser;
        res.redirect('/');

    } else {
        req.flash('error', 'Incorrect email or password!');
        res.redirect('/login');
    }

};