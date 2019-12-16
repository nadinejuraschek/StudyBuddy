const buddyData = require("../data/friends");

module.exports = (app) => {
    app.get("/api/buddies", function (req, res) {
        res.json(buddyData);
    });

    app.post("/api/buddies", function(req, res) {
    });
    
};