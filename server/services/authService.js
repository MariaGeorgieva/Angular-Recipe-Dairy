const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const { createToken } = require('../middlewares/jwt');
const User = require('../models/User');
const tokenBlacklist = require('../models/tokenBlacklistModel');
const { authCookieName } = require('../app-config');

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

    return createToken(user);
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

    return createToken(user);
    // return createToken(user);
}

async function logout(token) {
    // console.log('Logout!!!');
    // tokenBlacklist.create(token)
    // res.clearCookie(authCookieName)
    //     .status(204)
    //     .send({ message: 'Logged out!' });

}

// function createToken(data) {
//     return jwt.sign(data, secret, { expiresIn: '1d' });
// }
function createToken(user) {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,

    };

    // return {
    //     _id: user._id,
    //     username: user.username,
    //     email: user.email,
    //     role: user.role,
    //     accessToken: jwt.sign(payload, secret)
    // };
    return jwt.sign(payload, secret, { expiresIn: '1d' });
}

async function blacklistToken(token) {
    return tokenBlacklist?.findOne({ token });
}
// function verifyToken(token) {
//     return new Promise((resolve, reject) => {
//         jwt.verify(token, secret, (err, data) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve(data);
//         });
//     });
// }
function parseToken(token) {
    // const blacklistedToken = blacklistedToken(token);
    // console.log()
    // if (blacklistedToken) {
    //     throw new Error('Token is blacklisted');
    // }

    // return jwt.verify(token, secret);
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
// function parseToken(token) {
//     try {
//         const data = jwt.verify(token, secret);
//         console.log('Parse data' + data)
//         return data;
//     } catch (error) {
//         throw new Error('Invalid access token!')
//     }
//     // const blacklistedToken = blacklistedToken(token);
//     // console.log("Parse Token Result blacklistedToken: " + blacklistedToken)
//     // if (blacklistedToken) {
//     //     console.log("Have blacklistedToken: ")
//     //     throw new Error('Token is blacklisted');

//     // }
//     // if (tokenBlacklist.has(token)) {
//     //     throw new Error('Token is blacklisted');
//     // }

//     // return jwt.verify(token, secret);
// }

module.exports = {
    register,
    login,
    logout,
    parseToken,
    blacklistToken

};