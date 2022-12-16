const Category = require('../models/Category');


async function getAllCategories() {
    return Category?.find({}).populate();
}

async function getCategoryById(categoryId) {
    return Category?.findById(categoryId).populate();
}

// create Category, admin permission TODO
async function createCategory(category) {
    return Category.create(category);
}

//update Category
async function updateCategory(categoryId, data) {
    const existing = await Category.findById(categoryId);

    existing.titleCategory = data.titleCategory;
    existing.image = data.image;

    return await existing.save();
}

//delete Category
async function deleteCategory(categoryId) {
    return Category.findByIdAndRemove(categoryId);
}

//Get recipes by category
async function getRecipesByCategory(categoryId) {
    const category= await Category?.findById(categoryId).populate({
        path : 'recipesID',
        populate : {
          path : '_id'
        }
      });

    // return Category?.findOne({ recipesID }).populate();
    return category
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    getRecipesByCategory
}