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



const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3030,
        dbURL: 'mongodb://127.0.0.1:27017/recipesDB',
        origin: ['http://localhost:5555', 'http://localhost:4200']
    },
    production: {
        port: process.env.PORT || 3030,
        dbURL: process.env.DB_URL_CREDENTIALS,
        origin: []
    }
};

start();

async function start() {
    await mongoose.connect(config[env].dbURL);
    console.log('Database connected!');

    const app = express();
    app.use(cors({
        origin: config.origin,
        credentials: true
    }));

    app.use(express.json());
    app.use(cors());
    app.use(session());
    app.use(trimBody());

    app.get('/', (req, res) => {
        res.json({ message: 'REST service operational' });
    });

    app.use('/auth', authController);
    app.use('/category', categoryController);//isAdmin(), 
    app.use('/ingredient', ingredientController); // isAdmin(),
    app.use('/recipe', recipeController);

    app.listen(config[env].port, () => console.log(`Server is running on port ${config[env].port}.`));
}