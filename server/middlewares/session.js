const { authCookieName } = require('../app-config');
const { parseToken } = require('../services/authService');

module.exports = () => (req, res, next) => {
    const token = req.cookies[authCookieName] || '';
    // console.log("In session Before Token: ");
    console.log("Before Token req.user " + req.user)
    console.log("Before Token req.isLoggedIn " + req.isLoggedIn)
    if (token) {
        console.log("In session After Token: ")
          console.log("Before Token req.user " + req.user)
    console.log("Before Token req.isLoggedIn " + req.isLoggedIn)
        try {
            const payload = parseToken(token);//error here 
            console.log("In session Payloads After Parsed Token")
            payload.then((user) => {
                req.user = user;
                req.isLoggedIn = true;
                console.log("Assign user._id: " + req.user.roles);
              
            });
        } catch (err) {
            console.log("In session Error: " + err)
            return res.status(401).json({ message: 'Invalid authorization token' });
        }
    }

    next();
};