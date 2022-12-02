const express = require('express');
const mongoose = require('mongoose');
const authController = require('./controllers/authController');
const categoryController = require('./controllers/categoryController');
const ingredientController = require('./controllers/IngredientController');
const recipeController = require('./controllers/recipeController');
const cors = require('./middlewares/cors');
const { isAdmin, hasUser } = require('./middlewares/guards');
const session = require('./middlewares/session');
const trimBody = require('./middlewares/trimBody');

const connectionString = 'mongodb://127.0.0.1:27017/recipesDB';

start();

async function start() {
    await mongoose.connect(connectionString);
    console.log('Database connected!');

    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(session());
    app.use(trimBody());

    app.get('/', (req, res) => {
        res.json({ message: 'REST service operational' });
    });

    app.use('/auth', authController);
    app.use('/category', isAdmin(), categoryController);
    app.use('/ingredient', isAdmin(), ingredientController);
    app.use('/recipe', recipeController);

    app.listen(3030, () => console.log('REST service started at port 3030'));
}