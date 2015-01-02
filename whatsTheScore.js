CricketMatchResults = new Mongo.Collection("cricketMatchResults");
CricketMatchResults.attachSchema(new SimpleSchema({
    team1: {
        type: String,
        label: "Team-1",
        max: 50
    },
    team2: {
        type: String,
        label: "Team-2",
        max: 50
    },
    resultText: {
        type: String,
        label: "Result",
        max: 200
    },
    matchDate: {
        type: Date,
        label: "Held on"
    },
    runsOfTeam1: {
        type: Number,
        label: "Runs",
        max: 1000
    },
    wicketsOfTeam1: {
        type: Number,
        label: "Wickets",
        max: 10
    }, team1Overs: {
        type: Number,
        label: "Overs",
        max: 100
    },
    runsOfTeam2: {
        type: Number,
        label: "Runs",
        max: 1000
    },
    wicketsOfTeam2: {
        type: Number,
        label: "Wickets",
        max: 10
    },
    team2Overs: {
        type: Number,
        label: "Overs",
        max: 100
    }

}));

if (Meteor.isClient) {

    Meteor.subscribe("cricketMatchResults");

    Template.cricketMatchResults.helpers({
        cricketMatchResults: function () {
            console.log(CricketMatchResults.find({}).count());
            return CricketMatchResults.find({}, {sort: {matchDate: -1}});
        }
    });

    Template.recordScoreOfCricketMatch.events({
        "submit #recordScoreOfCricketMatchForm": function (event) {
            Meteor.call("recordScoreOfCricketMatch",
                event.target.team1.value,
                event.target.team2.value,
                event.target.resultText.value,

                event.target.runsOfTeam1.value,
                event.target.runsOfTeam2.value,
                event.target.wicketsOfTeam1.value,
                event.target.wicketsOfTeam2.value,
                event.target.team1Overs.value,
                event.target.team2Overs.value
            );

            // Clear form
            event.target.team1.value =
                event.target.team2.value =
                    event.target.runsOfTeam1.value =
                        event.target.runsOfTeam2.value =
                            event.target.wicketsOfTeam1.value =
                                event.target.wicketsOfTeam2.value =
                                    event.target.team1Overs.value =
                                        event.target.team2Overs.value =
                                            event.target.resultText.value = '';

            // Prevent default form submit
            return false;
        }
    });


}

Meteor.methods({
    recordScoreOfCricketMatch: function (team1, team2, resultText, runsOfTeam1, runsOfTeam2, wicketsOfTeam1, wicketsOfTeam2, team1Overs, team2Overs) {
        CricketMatchResults.insert({
            team1: team1,
            team2: team2,
            resultText: resultText,
            matchDate: new Date(),
            runsOfTeam1: runsOfTeam1,
            runsOfTeam2: runsOfTeam2,
            wicketsOfTeam1: wicketsOfTeam1,
            wicketsOfTeam2: wicketsOfTeam2,
            team1Overs: team1Overs,
            team2Overs: team2Overs
        });
    }
});

if (Meteor.isServer) {
    Meteor.startup(function () {
        //CricketMatchResults.insert({team1: "India", team2: "Australia", resultText: "Australia won by 9 wickets", matchDate: new Date(),runsOfTeam1:200,runsOfTeam2:190,wicketsOfTeam1:5,wicketsOfTeam2:8,team1Overs:50,team2Overs:50});
    });

    Meteor.publish("cricketMatchResults", function () {
        return CricketMatchResults.find();
    });

}