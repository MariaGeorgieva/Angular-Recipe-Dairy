const User = require('../models/User');


async function getUserProfile() {
    return User?.findOne({ email }).collation({ locale: 'en', strength: 2 }).populate();;
}

async function getAdminProfile() {
    return User?.findOne({ email, roles }).collation({ locale: 'en', strength: 2 }).populate();;
}


module.exports = {
    getUserProfile,
}