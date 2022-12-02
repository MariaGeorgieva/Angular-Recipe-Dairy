function hasUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.status(401).json({ message: 'Please log in' });
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        if (req.user) {
            res.status(400).json({ message: 'You are already logged in' });
        } else {
            next();
        }
    };
}


function isAdmin(role) {
    return (req, res, next) => {
        if (req.user == undefined || req.user.roles.includes(role) == false) {
            res.redirect('/login');
        } else {
            if (req.user.roles == 'admin') {
                next();
            }
            else {
                res.status(403).json({ message: 'You don\'n have permission!!!' });
            }
        }
    };
}

module.exports = {
    hasUser,
    isGuest,
    isAdmin
};