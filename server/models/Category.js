const { Schema, model, Types } = require('mongoose');

const categorySchema = new Schema({
    titleCategory: {
        type: String, required: true, unique: true,
        minlength: [3, 'Category title must be at least 3  characters']
    },
    image: { type: String, required: [true, 'Image URL is required'] },
    recipesID: { type: [Types.ObjectId], default: [], ref: 'Recipe' }
});

categorySchema.index({ titleCategory: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Category = model('Category', categorySchema);

module.exports = Category;