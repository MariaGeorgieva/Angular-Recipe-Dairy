const authController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { authCookieName } = require('../app-config');
const { hasUser, isGuest } = require('../middlewares/guards');

const { register, login, logout, blacklistToken } = require('../services/authService');
const { parseError } = require('../util/parser');


authController.post('/register', isGuest(),
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 character long'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length > 0) {
                throw errors;
            }

            const token = await register(req.body.username, req.body.email, req.body.password, req.body.rePassword);
            // const user = await register(req.body.username, req.body.email, req.body.password, req.body.rePassword);

            res.cookie(authCookieName, token, { httpOnly: true })
            res.json(token); // attachToken(req, res, user);
            // res.json(user);

            // res.status(201).json(user)

        } catch (error) {
            const message = parseError(error);
            res.status(400).json({ message });
        }
    });

authController.post('/login', async (req, res) => {//isGuest(),
    try {
        // const user = await login(req.body.email, req.body.password);
        const token = await login(req.body.email, req.body.password);
        // const token = createToken(user);
        res.cookie(authCookieName, token, { httpOnly: true })
        // res.status(200).send(user);
        res.status(201).json(token)
        // res.json({ message: "Logged in successfully 😊 👌" });
        // res.status(200)
        //     // .send(user);
    } catch (error) {
        const message = parseError(error);
        res.status(401).json({ message });
    }
});


//We are here after successful decode
authController.post('/logout', async (req, res) => {  //hasUser(),

    console.log("authController logout IN: ");
    try {
        const token = req.cookies[authCookieName];
       await  blacklistToken(token);
        res.clearCookie(authCookieName)
            .status(204)
            .json({ message: 'Logged out!' });
    } catch (error) {
        const message = parseError(error);
        res.status(400).json({ message });
    }
});

module.exports = authController;