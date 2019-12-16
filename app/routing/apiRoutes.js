const buddyData = require('../data/friends.js');

module.exports = (app) => {
    app.get("/api/buddies", function (req, res) {
        res.json(buddyData);
    });

    app.post("/api/buddies", function(req, res) {
        buddyData.push(req.body);
        res.json(buddyData);
    });
};