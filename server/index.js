global.__basedir = __dirname;
const express = require('express');
require('dotenv').config({ path: '.env' });

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const cors = require('./middlewares/cors');
const { isAdmin, hasUser } = require('./middlewares/guards');
const trimBody = require('./middlewares/trimBody');
const auth = require('./middlewares/auth');
const apiRouter = require('./router');
const path = require('path');


const env = process.env.NODE_ENV || 'development';
const config = {
    development: {
        port: process.env.PORT || 3030,
        dbURL: process.env.DB_URL_CREDENTIALS,
        origin: ['http://localhost:5555', 'http://localhost:4200']
    },
    production: {
        port: process.env.PORT || 3030,
        dbURL: process.env.DB_URL_CREDENTIALS,
        origin: []
    }
};
// const jwtSecret = 'TwIdhjw*ACShA$yz';
start();

async function start() {
    await mongoose.connect(config[env].dbURL);
    console.log('Database connected!');

    const app = express();

    app.use(express.json());
    app.use(express.static(path.resolve(__basedir, 'static')));
    app.use(cookieParser());
    app.use(trimBody());
    app.use(cors());
    app.use(auth());

    app.get('/', (req, res) => {
        res.json({ message: 'REST service operational' });
    });


    app.use('/api', apiRouter);

    // app.use()
    // app.use('/auth', authController);
    // app.use('/category', categoryController);
    // app.use('/ingredient', ingredientController);// isAdmin(), 
    // app.use('/recipe', recipeController);
    // app.use('/user', userController); //hasUser(),

    app.listen(config[env].port, () => console.log(`Server is running on port ${config[env].port}.`));
}