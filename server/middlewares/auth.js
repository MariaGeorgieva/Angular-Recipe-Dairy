// const jwt = require('jsonwebtoken');
// const { authCookieName } = require('../app-config');


// module.exports = (jwtSecret) => (req, res, next) => {
//     const token = req.cookies[authCookieName] || '';
//         if (token) {
//         try {
//             const user = jwt.verify(token, jwtSecret);
//             req.user = {
//                 'email': user.email,
//                 'username': user.username,
//                 '_id': user._id,
//                 token
//             }
//             // req.user = data;
//         } catch (err) {
//             res.clearCookie('jwt');
//             return res.redirect('/login');
//         }
//     }

//     req.signJwt = (data) => jwt.sign(data, jwtSecret, {
//         expiresIn: '4h'
//     });

//     next();
// };