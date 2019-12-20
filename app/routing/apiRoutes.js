var buddyData = require('../data/friends.js');

module.exports = (app) => {
    app.get("/api/buddies", function (req, res) {
        console.log(res);
        res.json(buddyData);
    });

    app.post("/api/buddies", function(req, res) {

        var bestMatches = [];

        var newBuddy = req.body;
        var newBuddyScores = newBuddy.scores;

        console.log(newBuddy);
        console.log("New Buddy Scores: " + newBuddyScores);

        function calcTotalDiff(buddyA, buddyB) {
            var totalDiff = 0;
            for (var i=0; i<10; i++) {
                var diff = Math.abs(parseInt(buddyA[i]) - parseInt(buddyB[i]));
                // console.log("Diff = " + diff);
                totalDiff += diff;
                // console.log("Total Diff = " + totalDiff);
            };
            return totalDiff;
        };

        var lowestScore = 1000;
        for (var i=0; i<buddyData.length; i++) {
            if (buddyData[i].name != newBuddy.name) {
                console.log("Buddy #" + parseInt(i+1));
                var currentScore = calcTotalDiff(buddyData[i].scores, newBuddyScores);
                console.log("Current Score = " + currentScore);
                    if (currentScore < lowestScore) {
                        lowestScore = currentScore;
                        bestMatches.push(buddyData[i]);
                        console.log("Lowest Score = " + lowestScore);
                        console.log("Buddy #" + (i+1) + " is the best match.");
                        console.log(bestMatches);
                    } else if (currentScore === lowestScore) {
                        bestMatches.push(buddyData[i]);
                        console.log("Buddy #" + (i+1) + " is also a best match.");
                        console.log(bestMatches);
                    } else {
                        console.log("Buddy #" + (i+1) + " is not a better match.");
                    };
            };
        };

        buddyData.push(newBuddy);
        res.json(buddyData);
    });
};