const pilotService = require("../service/pilot-service")
const {isUserLoggedIn} = require("../validators/user-logged-in-validator");
const {isTokenValid} = require("../validators/token-validator");

module.exports = app => {
    app.use("/pilots", isUserLoggedIn, isTokenValid, (req, res, next) => {
        console.log("passed on router verification");
        next();
    })

    app.get("/pilots", (req, res, next) => {
        const pilots = pilotService.findAll();
        res.send(pilots);
        return;
    });

    app.get("/pilots/:id", (req, res, next) => {
        const pilot = pilotService.findById(req.params.id);
        if(pilot){
            res.send(pilot);
            return;
        }
        res.status(404).send(`pilot id: ${typeof req.params.id} not found`);
        return;
    });
}