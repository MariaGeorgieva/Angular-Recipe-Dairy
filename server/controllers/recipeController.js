const { hasUser } = require('../middlewares/guards');
const Category = require('../models/Category');
const { getAllRecipes, createRecipe, getRecipeById } = require('../services/recipeService');

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
        const category = await getRecipeById(req.params.id);
        res.json(category);
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

        res.json(recipe);
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message });
    }
});



//edit recipe owner id


//delete recipe owner id


//last 4 recipes


//most liked????


module.exports = recipeController;