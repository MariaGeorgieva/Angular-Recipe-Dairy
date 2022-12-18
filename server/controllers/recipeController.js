const auth = require('../middlewares/auth');
const { hasUser } = require('../middlewares/guards');
const Category = require('../models/Category');
const User = require('../models/User');
const { getAllRecipes, createRecipe, getRecipeById, updateRecipe, deleteRecipe } = require('../services/recipeService');

const recipeController = require('express').Router();

const { parseError } = require('../util/parser');

//Get All Recipes
recipeController.get('/', async (req, res) => {

    let recipes = [];
    recipes = await getAllRecipes();
    res.json(recipes);
});

//Get recipe by id
recipeController.get('/:id', async (req, res) => {
    try {
        const recipe = await getRecipeById(req.params.id);
        res.json(recipe);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }

});

//Create Recipe
recipeController.post('/create', hasUser(), async (req, res) => {// hasUser(),

    try {
        const data = {
            titleRecipe: req.body.titleRecipe,
            shortDescription: req.body.shortDescription,
            category: req.body.category,
            meal: req.body.meal,
            preparationTime: req.body.preparationTime,
            cookingTime: req.body.cookingTime,
            servings: req.body.servings,
            difficulty: req.body.difficulty,
            mainIngredient: req.body.mainIngredient,
            ingredients: req.body.ingredients,
            preparation: req.body.preparation,
            season: req.body.season,
            imageUrl: req.body.imageUrl,
            ownerID: req.user._id
        }

        const recipe = await createRecipe(data);
        const idCategory = recipe?.category;

        const existingCategory = await Category.findById(idCategory);
        existingCategory.recipesID.push(recipe?._id);
        await existingCategory.save();

        const existingUser = await User.findById(req.user._id);
        existingUser.ownRecipes.push(recipe?._id)
        existingUser.save();

        res.json(recipe);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});



//edit recipe owner id
recipeController.put('/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const recipe = await getRecipeById(req.params.id);

    if (req.user._id.toString() != recipe.ownerID._id.toString() ) {
       return res.status(403)
       .json({ message: 'You don\'n have permission!!!' });
    }
    try {
        await updateRecipe(id, data);
        const updatedRecipe = await getRecipeById(id);
        res.status(200).json(updatedRecipe);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});

//delete recipe owner id
recipeController.delete('/:id', hasUser(), async (req, res) => {
    const id = req.params.id;
    const recipe = await getRecipeById(req.params.id);

    if (req.user?._id.toString() != recipe?.ownerID?._id.toString() ) {
       return res.status(403)
       .json({ message: 'You don\'n have permission!!!' });
    }
    try {
        await deleteRecipe(id)
        res.status(200).json('Category Deleted!')
    } catch (error) {
        const message = parseError(err);
        res.status(400).json({ message });
    }


});

//last 4 recipes


//most liked????


module.exports = recipeController;