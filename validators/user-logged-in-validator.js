function isUserLoggedIn(req, res, next) {
    if (req.headers["authorization"] == null || req.headers["authorization"].trim().length < 1) {
        res.status(401).send("authorization is required");
        return;
    }
    next();
}

module.exports = {
    isUserLoggedIn
}