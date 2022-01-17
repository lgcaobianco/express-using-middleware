const userService = require("../service/user-service")

const isTokenValid = (req, res, next) => {
    if (userService.isTokenExpired(req.headers["authorization"])) {
        console.log(`auth expired`)
        res.status(401).send("authorization is expired");
        return;
    }
    next();
}

module.exports = {
    isTokenValid
}