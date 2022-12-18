const User = require('../models/User');


async function getUserProfile(email) {
  return User?.findOne({ email }).collation({ locale: 'en', strength: 2 })
    .populate();
}

async function getUserRecipes(userId) {
  return User?.findById(userId)
    .populate({
      path: 'ownRecipes',
      populate: {
        path: '_id'
      }
    })
}


async function getAdminProfile(email, roles) {
  // const admin = User?.findOne({ email }).collation({ locale: 'en', strength: 2 }).populate();

  return User?.findOne({ email, roles }).collation({ locale: 'en', strength: 2 }).populate();;
}


module.exports = {
  getUserProfile,
  getAdminProfile,
  getUserRecipes
}