const { isTokenValid } = require("../validators/token-validator")
const {isUserLoggedIn} = require("../validators/user-logged-in-validator")

module.exports = app => {
    app.get("/contractors", isUserLoggedIn, isTokenValid, (req, res, next) => {
        console.log("contractors is now protected");
    })
}