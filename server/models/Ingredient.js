const { Schema, model, Types } = require('mongoose');

const ingredientSchema = new Schema({
    titleIngredient: { type: String, required: true, unique: true },
    image: { type: String, required: [true, 'Image URL is required'] },
    recipesID: { type: [Types.ObjectId], default: [], ref: 'Recipe' }
});

ingredientSchema.index({ titleIngredient: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const Ingredient = model('Ingredient', ingredientSchema);

module.exports = Ingredient;