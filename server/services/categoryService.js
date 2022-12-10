const Category = require('../models/Category');


async function getAllCategories() {
    return Category?.find({}).populate();
}

async function getCategoryById(categoryId) {
    return Category?.findById(categoryId).populate();
}

// create Category, admin permission
async function createCategory(category) {
    return Category.create(category);
}

async function updateCategory(categoryId, data) {
    const existing = await Category.findById(categoryId);

    existing.titleCategory = data.titleCategory;
    existing.image = data.image;

    return await existing.save();
}

async function deleteCategory(categoryId) {
    return Category.findByIdAndRemove(categoryId);
}


async function getRecipesByCategory(categoryId) {
    const allRecipes = await Category?.findById(categoryId);
    return Category?.find({ allRecipes: recipesID }).populate();
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    getRecipesByCategory
}