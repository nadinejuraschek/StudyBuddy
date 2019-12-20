var buddyData = require('../data/friends.js');

module.exports = (app) => {
    app.get("/api/buddies", function (req, res) {
        console.log(res);
        res.json(buddyData);
    });

    app.post("/api/buddies", function(req, res) {
        // create empty array to store all best matches
        var bestMatches = [];

        // store new buddy data
        var newBuddy = req.body;
        var newBuddyScores = newBuddy.scores;
        // TEST
        console.log(newBuddy);
        console.log("New Buddy Scores: " + newBuddyScores);

        // loop #1: calculate the total difference of the scores arrays
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

        // set lowest score to a high number, so that it is higher than any totalDiff for the first time the loop runs
        var lowestScore = 1000;

        // loop #2: loop through all existing buddies
        for (var i=0; i<buddyData.length; i++) {
            // prevent new buddy from matching with itself
            if (buddyData[i].name != newBuddy.name) {
                console.log("Buddy #" + parseInt(i+1));
                var currentScore = calcTotalDiff(buddyData[i].scores, newBuddyScores);
                console.log("Current Score = " + currentScore);
                // if the totalDiff is lower than the last totalDiff
                if (currentScore < lowestScore) {
                    // change lowestScore
                    lowestScore = currentScore;
                    // add new match to bestMatches
                    bestMatches.push(buddyData[i]);
                    console.log("Lowest Score = " + lowestScore);
                    console.log("Buddy #" + (i+1) + " is the best match.");
                    console.log(bestMatches);
                } // if there is more than one best match
                else if (currentScore === lowestScore) {
                    bestMatches.push(buddyData[i]);
                    console.log("Buddy #" + (i+1) + " is also a best match.");
                    console.log(bestMatches);
                } else {
                    console.log("Buddy #" + (i+1) + " is not a better match.");
                };
            };
        };

        buddyData.push(newBuddy);
        res.json(bestMatches);
    });
};