function hasUser() {
    return (req, res, next) => {
        console.log("hasUser(): " + req.user);
        if (req.user) {
            next();
        } else {
            res.status(401).json({ message: 'Please log in!' });
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        console.log("Guard isGuest(): " + req.user);
        if (req.user) {
            res.status(400).json({ message: 'You are already logged in' });
        } else {
            next();
        }
    };
}

function isAdmin() {
    return (req, res, next) => {
        console.log("Guard isAdmin(): " + req.user.roles);
        if (req.user?.roles == 'admin') {
            next();
        }
        else {
            res.status(403).json({ message: 'You don\'n have permission!!!' });
        }

    };
}

module.exports = {
    hasUser,
    isGuest,
    isAdmin
};