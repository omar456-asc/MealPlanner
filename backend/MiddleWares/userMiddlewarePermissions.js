const isAdmin = (req, res, next) => {
    
    next();
};

module.exports = { isAdmin };
