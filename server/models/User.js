const { Schema, model, Types } = require('mongoose');


const userSchema = new Schema({
    username: { type: String, required: true, minlength: [3, 'Username must be at least 3 character long'] },
    email: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    roles: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    ownRecipes: {
        type: [Types.ObjectId],
        default: [],
        ref: 'Recipe'
    },
    likedRecipes: {
        type: [Types.ObjectId],
        default: [],
        ref: 'Recipe'
    },
    savedRecipes: {
        type: [Types.ObjectId],
        default: [],
        ref: 'Recipe'
    }
});


userSchema.index({ username: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;