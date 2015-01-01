CricketMatchResults = new Mongo.Collection("cricketMatchResults");

if (Meteor.isClient) {

    Meteor.subscribe("cricketMatchResults");

    Template.cricketMatchResults.helpers({
        cricketMatchResults: function () {
            console.log(CricketMatchResults.find({}).count());
            return CricketMatchResults.find({}, {sort: {matchDate: -1}});
        }
    });

    Template.recordScoreOfCricketMatch.events({
        "submit .recordScoreOfCricketMatchForm": function (event) {
            Meteor.call("recordScoreOfCricketMatch",
                event.target.team1.value,
                event.target.team2.value,
                event.target.resultText.value);

            // Clear form
            event.target.team1.value =
                event.target.team2.value =
                    event.target.resultText.value = '';

            // Prevent default form submit
            return false;
        }
    });


}

Meteor.methods({
    recordScoreOfCricketMatch: function (team1, team2, resultText) {
        CricketMatchResults.insert({team1: team1, team2: team2, resultText: resultText, matchDate: new Date()});
    }
});

if (Meteor.isServer) {
    Meteor.startup(function () {
        //CricketMatchResults.insert({team1: "India", team2: "Australia", resultText: "Australia won by 9 wickets", matchDate: new Date()});
    });

    Meteor.publish("cricketMatchResults", function () {
        return CricketMatchResults.find();
    });

}