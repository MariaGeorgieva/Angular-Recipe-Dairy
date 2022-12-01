const  Category  = require('../models/Category');



async function getAllCategories() {
    return Category?.find({}).populate();
}

async function getCategoryById(categoryId) {
    return Category.find(categoryId).populate();
}

// create Category
async function createCategory(category) {
    return Category.create(category);
}



module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
}