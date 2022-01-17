const userService = require("../service/user-service")

module.exports = app => {
    app.post("/login", (req, res) => {
        if(req.headers.hasOwnProperty("content-type") && req.headers["content-type"].toLowerCase() === "application/json"){
            const user = req.body;
            if(userService.authenticate(user)){
                res.send({
                    token: userService.getToken()
                });
                return;
            }
            res.status(401).send("authentication failed");
            return;
        }
        res.status(400).send("content type not supported");        
    });
}