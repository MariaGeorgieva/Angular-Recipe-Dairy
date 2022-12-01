const express = require('express');
const mongoose = require('mongoose');
const categoryController = require('./controllers/categoryController');
const ingredientController = require('./controllers/IngredientController');
const recipeController = require('./controllers/recipeController');
const cors = require('./middlewares/cors');

const connectionString = 'mongodb://127.0.0.1:27017/recipesDB';

start();

async function start() {
    await mongoose.connect(connectionString);
    console.log('Database connected!');

    const app = express();

    app.use(express.json());
    app.use(cors());
    // app.use(trimBody());
    // app.use(session());

    app.get('/', (req, res) => {
        res.json({ message: 'REST service operational' });
    });

    app.use('/recipe', recipeController);
    app.use('/category', categoryController);
    app.use('/ingredient', ingredientController);

    // app.use('/users', authController);
    // app.use('/data/catalog', dataController);

    app.listen(3030, () => console.log('REST service started at port 3030'));
}