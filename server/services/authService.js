const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const tokenBlacklist = require('../models/tokenBlacklistModel');

const secret = 'TwIdhjw*ACShA$yz';

// const tokenBlacklist = new Set();

async function register(username, email, password, repass) {
    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });

    if (existingUsername) {
        throw new Error('Username is already taken');
    }

    if (existingEmail) {
        throw new Error('Email is already taken');
    }

    if (password != repass) {
        throw new Error('Passwords not match!');
    }

    const user = await User.create({
        username,
        email,
        hashedPassword: await bcrypt.hash(password, 10)
    });

    return user;
}

async function login(email, password) {
    let user = '';

    if (email) {
        user = await User.findOne({ email }).collation({ locale: 'en', strength: 2 });
    }

    if (!user) {
        throw new Error('Incorrect email or password');
    }

    const match = await bcrypt.compare(password, user.hashedPassword);

    if (!match) {
        throw new Error('Incorrect email or password');
    }

    return user
}


function createToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,

    };


    return jwt.sign(payload, secret, { expiresIn: '1d' });
}

async function blacklistToken(token) {
    return tokenBlacklist.create({ token });
}

function parseToken(token) {
    return new Promise((resolve, reject) => {
                jwt.verify(token, secret, (err, data) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(data);
                });
            });
}


module.exports = {
    register,
    login,
    parseToken,
    blacklistToken,
    createToken

};