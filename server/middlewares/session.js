const { authCookieName } = require('../app-config');
const { parseToken } = require('../services/authService');

module.exports = () => (req, res, next) => {
    const token = req.cookies[authCookieName] || '';
    console.log("In session Before Token: ");

    if (token) {
        console.log("In session After Token: " + token.username)
        try {
            const payload = parseToken(token);//error here 
            console.log("In session Payloads " + payload)
            req.user = payload;
            // req.token = token;
            console.log("In session Payloads" + req.user.username)
        } catch (err) {
            console.log("In session Error: " + err)
            return res.status(401).json({ message: 'Invalid authorization token' });
        }
    }

    next();
};