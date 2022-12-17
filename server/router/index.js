const router = require('express').Router();
const authController = require("../controllers/authController");
const categoryController = require("../controllers/categoryController");
const ingredientController = require("../controllers/IngredientController");
const recipeController = require("../controllers/recipeController");
const userController = require("../controllers/userController");



router.use('/auth', authController);
router.use('/category', categoryController);
router.use('/ingredient', ingredientController);// isAdmin(), 
router.use('/recipe', recipeController);
router.use('/user', userController); //hasUser(),

module.exports = router;

