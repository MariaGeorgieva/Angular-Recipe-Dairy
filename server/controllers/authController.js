const authController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { hasUser, isGuest } = require('../middlewares/guards');

const { register, login, logout } = require('../services/authService');
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
            res.json(token);
        } catch (error) {
            const message = parseError(error);
            res.status(400).json({ message });
        }
    });

authController.post('/login', isGuest(), async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.json(token);
    } catch (error) {
        const message = parseError(error);
        res.status(401).json({ message });
    }
});


authController.get('/logout', async (req, res) => {  //hasUser(),
    const token = req.token;
    console.log("authController logout: " + token);
    await logout(token);
    res.status(204).end();
});

module.exports = authController;