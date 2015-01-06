CricketMatchSummary = new Mongo.Collection("cricketMatchSummary");
CricketMatchSummary.attachSchema(new SimpleSchema({
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
    cricketMatchDate: {
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
    },
    team1Overs: {
        type: Number,
        label: "Overs",
        max: 100
    },
    highestScoringPlayerTeam1: {
        type: String,
        label: "Name of player",
        max: 200
    },
    highestRunsTeam1: {
        type: Number,
        label: "Highest runs",
        max: 1000
    },
    highestWicketPlayerTeam1: {
        type: String,
        label: "Name of player",
        max: 200
    },
    highestWicketsTeam1: {
        type: Number,
        label: "Highest wickets",
        max: 10
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
    },
    highestScoringPlayerTeam2: {
        type: String,
        label: "Name of player",
        max: 200
    },
    highestRunsTeam2: {
        type: Number,
        label: "Highest runs",
        max: 1000
    },
    highestWicketPlayerTeam2: {
        type: String,
        label: "Name of player",
        max: 200
    },
    highestWicketsTeam2: {
        type: Number,
        label: "Highest wickets",
        max: 10
    }
}));

if (Meteor.isClient) {

    Session.setDefault("showRecordCricketMatch", false);
    Session.setDefault("cricketSummary", null);
    Meteor.subscribe("cricketMatchSummary");

    Template.body.helpers({
        showRecordCricketMatch: function () {
            return Session.get("showRecordCricketMatch");
        },
        cricketSummary: function () {
            return Session.get("cricketSummary");
        }
    });


    Template.body.events({
        "click #recordButton": function (event) {
            Session.set("showRecordCricketMatch", true);
            Session.set("cricketSummary", null);
        }
    });

    Template.cricketMatchResults.helpers({
        cricketMatchResults: function () {
            return CricketMatchSummary.find({}, {sort: {cricketMatchDate: -1}});
        }

    });

    Template.cricketMatchResults.events({
        "click #teamRecord": function (event) {
            Session.set("cricketSummary", this);
        }
    });

    Template.cricketMatchSummary.helpers({
        cricketSummary: function () {
            return Session.get("cricketSummary");
        }
    });


    Template.cricketMatchSummary.events({
        "click #back": function (event) {
            Session.set("cricketSummary", null);
        }
    });


    Template.recordScoreOfCricketMatch.events({
        "submit #recordScoreOfCricketMatchForm": function (event) {
            Meteor.call("recordScoreOfCricketMatch",AutoForm.getFormValues("recordScoreOfCricketMatchForm").insertDoc);
        },
        "click #showResultsButton": function (event) {
            Session.set("showRecordCricketMatch", false);
            Session.set("cricketSummary", null);
        }
    });


}

Meteor.methods({
    recordScoreOfCricketMatch: function (doc) {
        doc.cricketMatchDate = new Date();
        CricketMatchSummary.insert(doc);
    }
});

if (Meteor.isServer) {
    Meteor.startup(function () {
        //CricketCricketMatchResults.insert({team1: "India", team2: "Australia", resultText: "Australia won by 9 wickets", CricketMatchDate: new Date(),runsOfTeam1:200,runsOfTeam2:190,wicketsOfTeam1:5,wicketsOfTeam2:8,team1Overs:50,team2Overs:50});
    });

    Meteor.publish("cricketMatchSummary", function () {
        return CricketMatchSummary.find();
    });

}