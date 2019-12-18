var buddyData = require('../data/friends.js');

module.exports = (app) => {
    app.get("/api/buddies", function (req, res) {
        console.log(res);
        res.json(buddyData);
    });

    app.post("/api/buddies", function(req, res) {
        console.log(req.body);
        buddyData.push(req.body);
        res.json(buddyData);
    });
};