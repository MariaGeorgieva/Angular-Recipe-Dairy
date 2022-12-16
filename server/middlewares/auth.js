const jwt = require('./jwt');
const { authCookieName } = require('../app-config');
const User = require('../models/User');
const tokenBlacklist = require('../models/tokenBlacklistModel');



function auth(redirectUnauthenticated = true) {
    return function (req, res, next) {
        const token = req.cookies[authCookieName] || '';
        if(token == ''){return next()}
        Promise.all([
            jwt.verifyToken(token),
            tokenBlacklist?.findOne({ token })
        ])
            .then(([data, blacklistedToken]) => {
                if (blacklistedToken) {
                    return Promise.reject(new Error('blacklisted token'));
                }
                User?.findOne({ email: data.email })
                    .then(user => {
                        req.user = user;
                        req.isLoggedIn = true;
                        next();
                    })
            })
            .catch(err => {
                console.log("Error Auth")
                if (!redirectUnauthenticated) {
                    next();
                    return;
                }
                if (['token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
                    console.error(err);
                    res
                        .status(401)
                        .send({ message: "Invalid token!" });
                    return;
                }
                next(err);
            });
    }
}

module.exports = auth;
