const userController = require('express').Router();
const { body, validationResult } = require('express-validator');
const { isAdmin } = require('../middlewares/guards');

const { parseError } = require('../util/parser');


userController.get('/admin', isAdmin(), async (req, res) => {
});

userController.get('/profile', async (req, res) => {
    // try {
    //     const categories = await getAllCategories();
    //     res.json(categories);
    // } catch (err) {
    //     const message = parseError(err);
    //     res.status(400).json({ message });
    // }
});

userController.get('/created-recipes', async (req, res) => {

});

userController.get('/saved-recipes', async (req, res) => {

});
userController.get('/favorite-recipes', async (req, res) => {

});


module.exports = userController;