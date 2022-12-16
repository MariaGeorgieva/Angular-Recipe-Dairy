const userController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isAdmin, hasUser } = require('../middlewares/guards');
const { getUserProfile } = require('../services/userService');

const { parseError } = require('../util/parser');


userController.get('/admin', isAdmin(), async (req, res) => {
    
    try {
        const userData = await getAdmin(req.user?.email);
        console.log("Admin userData: "+ userData);
        res.json(userData);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

userController.get('/profile', async (req, res) => {

    try {
        const userData = await getUserProfile(req.user?.email);
        res.json(userData);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

userController.get('/created-recipes', async (req, res) => {

});

userController.get('/saved-recipes', async (req, res) => {

});
userController.get('/favorite-recipes', async (req, res) => {

});


module.exports = userController;