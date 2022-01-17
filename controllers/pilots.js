const pilotService = require("../service/pilot-service")
const {isUserLoggedIn} = require("../validators/user-logged-in-validator");
const {isTokenValid} = require("../validators/token-validator");

module.exports = app => {
    app.get("/pilots", isUserLoggedIn, isTokenValid, (req, res, next) => {
        const pilots = pilotService.findAll();
        res.send(pilots);
    });
}