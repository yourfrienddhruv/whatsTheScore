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
            Session.set("showRecordCricketMatch", !Session.get("showRecordCricketMatch"));
        }
    });

    Template.cricketMatchResults.helpers({

        cricketMatchResults: function () {
            return CricketMatchSummary.find({}, {sort: {cricketMatchDate: -1}});
        }

    });

    Template.cricketMatchResults.events({
        "click #teamRecord": function (event) {
            //console.log(event);
            var a=Session.get("showRecordCricketMatch");
            if(a)
            Session.set("showRecordCricketMatch", !Session.get("showRecordCricketMatch"));
            Session.set("cricketSummary", this);
            //console.log("summary"+ Session.get("summary"));
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
            Meteor.call("recordScoreOfCricketMatch",
                event.target.team1.value,
                event.target.team2.value,
                event.target.resultText.value,

                event.target.runsOfTeam1.value,
                event.target.runsOfTeam2.value,
                event.target.wicketsOfTeam1.value,
                event.target.wicketsOfTeam2.value,
                event.target.team1Overs.value,
                event.target.team2Overs.value,

                event.target.highestScoringPlayerTeam1.value,
                event.target.highestRunsTeam1.value,
                event.target.highestWicketPlayerTeam1.value,
                event.target.highestWicketsTeam1.value,
                event.target.highestScoringPlayerTeam2.value,
                event.target.highestRunsTeam2.value,
                event.target.highestWicketPlayerTeam2.value,
                event.target.highestWicketsTeam2.value
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
                                            event.target.resultText.value =
                                                event.target.highestScoringPlayerTeam1.value =
                                                    event.target.highestRunsTeam1.value =
                                                        event.target.highestWicketPlayerTeam1.value =
                                                            event.target.highestWicketsTeam1.value =
                                                                event.target.highestScoringPlayerTeam2.value =
                                                                    event.target.highestRunsTeam2.value =
                                                                        event.target.highestWicketPlayerTeam2.value =
                                                                            event.target.highestWicketsTeam2.value = '';

            // Prevent default form submit
            return false;
        }
    });


}

Meteor.methods({
    recordScoreOfCricketMatch: function (team1, team2, resultText, runsOfTeam1, runsOfTeam2, wicketsOfTeam1, wicketsOfTeam2, team1Overs, team2Overs, highestScoringPlayerTeam1, highestRunsTeam1,
                                         highestWicketPlayerTeam1, highestWicketsTeam1, highestScoringPlayerTeam2, highestRunsTeam2,
                                         highestWicketPlayerTeam2, highestWicketsTeam2) {
        CricketMatchSummary.insert({
            team1: team1,
            team2: team2,
            resultText: resultText,
            cricketMatchDate: new Date(),
            runsOfTeam1: runsOfTeam1,
            runsOfTeam2: runsOfTeam2,
            wicketsOfTeam1: wicketsOfTeam1,
            wicketsOfTeam2: wicketsOfTeam2,
            team1Overs: team1Overs,
            team2Overs: team2Overs,
            highestScoringPlayerTeam1: highestScoringPlayerTeam1,
            highestRunsTeam1: highestRunsTeam1,
            highestWicketPlayerTeam1: highestWicketPlayerTeam1,
            highestWicketsTeam1: highestWicketsTeam1,
            highestScoringPlayerTeam2: highestScoringPlayerTeam2,
            highestRunsTeam2: highestRunsTeam2,
            highestWicketPlayerTeam2: highestWicketPlayerTeam2,
            highestWicketsTeam2: highestWicketsTeam2
        });
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