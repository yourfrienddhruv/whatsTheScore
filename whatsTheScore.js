CricketMatch = new Mongo.Collection("cricketMatch");
CricketSession = new Mongo.Collection("cricketSession");
CricketSessionEvent = new Mongo.Collection("cricketSessionEvent");

Team1OverScorecard = new Mongo.Collection("team1OverScorecard");
Team2OverScorecard = new Mongo.Collection("team2OverScorecard");
Team1PlayerScorecard = new Mongo.Collection("team1PlayerScorecard");
Team2PlayerScorecard = new Mongo.Collection("team2PlayerScorecard");


CricketMatch.attachSchema(new SimpleSchema({
    //Input
    team1: {
        type: String,
        label: "Team 1",
        max: 50
    },
    team2: {
        type: String,
        label: "Team 2",
        max: 50
    },
    totalOvers: {
        type: Number,
        label: "total Overs",
        max: 50
    },
    matchDate: {
        type: Date,
        label: "Match Date"

    }, currentSession: {
        type: Number,
        label: "currently Running session",
        autoform: {
            value: 0
        }
    }
}));


CricketSession.attachSchema(new SimpleSchema({
    matchId: {
        type: String,
        label: "Currently being played match",
        max: 50
    }, sessionNumber: {
        type: Number,
        label: "Session Number",
        max: 4,
        autoform: {
            value: 1
        }
    }
    //Fields
    , inning: {
        type: Number,
        label: "Inning",
        max: 2,
        autoform: {
            value: 1
        }
    },
    //Input
    battingTeam: {
        type: String,
        label: "Who's batting",
        max: 50
    }, bowlingTeam: {
        type: String,
        label: "Who's bowling",
        max: 50
    }, player1: {
        type: String,
        label: "Batsman 1",
        max: 100
    }, player2: {
        type: String,
        label: "Batsman 2",
        max: 100
    }, bowler: {
        type: String,
        label: "Bowler",
        max: 100
    },


    player1Run: {
        type: String,
        label: "Player 1 Run",
        max: 1000,
        autoform: {
            value: 0
        }
    }, player2Run: {
        type: String,
        label: "Player 2 Run",
        max: 1000,
        autoform: {
            value: 0
        }
    }, onStrike: {
        type: Boolean,
        label: "Is player1 On Strike?",
        max: 100,
        autoform: {
            value: true
        }
    }, runs: {
        type: Number,
        label: "Runs",
        max: 500,
        autoform: {
            value: 0
        }
    }, extras: {
        type: Number,
        label: "Extra",
        max: 100,
        autoform: {
            value: 0
        }
    }, wickets: {
        type: Number,
        label: "Wicket",
        max: 10,
        autoform: {
            value: 0
        }
    }, currentOver: {
        type: Number,
        label: "Current Over",
        autoform: {
            value: 0
        }
    }
    //Over level reset
    , wicketsInOver: {
        type: Number,
        label: "Wickets in current Over",
        max: 10,
        autoform: {
            value: 0
        }
    }, runsInOver: {
        type: String,
        label: "Runs",
        max: 1000,
        autoform: {
            value: 0
        }
    }, extrasInOver: {
        type: Number,
        label: "Extra",
        max: 100,
        autoform: {
            value: 0
        }
    }, ballSequence: {
        type: Number,
        label: "Ball sequence in an Over",
        max: 50,
        autoform: {
            value: 0
        }
    }, ballInOver: {
        type: Number,
        label: "Valid Ball Count",
        max: 6,
        autoform: {
            value: 0
        }
    }, startDate: {
        type: Date,
        label: "Session Start DateTime"
    }
}));

CricketSessionEvent.attachSchema(new SimpleSchema({
    matchId: {
        type: String,
        label: "Currently being played match",
        max: 50
    },sessionId: {
        type: String,
        label: "Session being played right now",
        max: 50
    }, over: {
        type: Number,
        label: "Current Over",
        max: 60
    }, ballSequence: {
        type: Number,
        label: "Ball sequence in an Over",
        max: 50
    }
    //Fields
    , ballInOver: {
        type: Number,
        label: "Valid Ball Count",
        max: 6
    }, bowler: {
        type: String,
        label: "bowler",
        max: 200
    }, onStrikePlayer: {
        type: String,
        label: "On Strike Player",
        max: 50
    },
    //Input
    runOfBatsman: {
        type: Number,
        label: "Run Of Batsman",
        max: 1000,
        autoform: {
            noselect : true,
            options: [
                {label: "Single", value: "1", selected: "true"},
                {label: "Double", value: "2"},
                {label: "Three", value: "3"},
                {label: "Four", value: "4"},
                {label: "Five", value: "5"},
                {label: "Six", value: "6"}
            ]
        }
    },
    "wicket.down":{type:Boolean, label:"is Wicket Down On this bowl?"},
    "wicket.reason.runOut.batsman": {type: String, max: 50, label: "Who got run out?"},
    "wicket.reason.runOut.throw": {type: String, max: 50, label: "Who throw the ball?"},
    "wicket.reason.catch.by": {type: String, max: 50, label: "Who catch the ball?"},

    "wicket.reason.hitWicket": {type: Boolean, max: 50, label: "If hit wicket"},
    "wicket.reason.stumpOut": {type: Boolean, max: 50, label: "If stump out wicket"},
    "wicket.reason.bowled": {type: Boolean, max: 50, label: "If clean bowled wicket"},

    ballType: {
        type: Number,
        max: 5,
        autoform: {
            noselect : true,
            options: [
                {label: "Valid", value: "0", selected: "true"},
                {label: "Wide", value: "1"},
                {label: "NoBall", value: "2"},
                {label: "LegBy", value: "3"},
                {label: "By", value: "4"},
                {label: "FreeHit", value: "5"}
            ]
        }
    },

    bowledOn: {
        type: Date,
        label: "bowled On"
    },

    //only schema
    player1: {
        type: String,
        label: "Player 2",
        max: 200
    },
    player2: {
        type: String,
        label: "Player 2",
        max: 200
    }

}));

/*CricketMatchSummary.attachSchema(new SimpleSchema({
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
 }));*/


teamOverScorecard = new SimpleSchema({
    team: {
        type: String,
        label: "Batting Team",
        max: 50
    },
    bowlerName: {
        type: String,
        label: "Bowler Name",
        max: 100
    },
    inning: {
        type: Number,
        label: "Inning",
        max: 10
    },
    oversBowled: {
        type: Number,
        label: "Overs Bowled",
        max: 10
    },
    runs: {
        type: Number,
        label: "Runs Given"
    },
    wickets: {
        type: Number,
        label: "Wickets in over"
    }
});

Team1OverScorecard.attachSchema(teamOverScorecard);
Team2OverScorecard.attachSchema(teamOverScorecard);


teamPlayerScorecard = new SimpleSchema({
    team: {
        type: String,
        label: "Batting Team",
        max: 50
    },
    playerName: {
        type: String,
        label: "Player Name",
        max: 100
    },
    inning: {
        type: Number,
        label: "Inning",
        max: 10
    },
    playerNo: {
        type: Number,
        label: "Player No.",
        max: 10
    },
    runs: {
        type: Number,
        label: "Runs"
    },
    ball: {
        type: Number,
        label: "Ball Faced"
    }
});

Team1PlayerScorecard.attachSchema(teamPlayerScorecard);
Team2PlayerScorecard.attachSchema(teamPlayerScorecard);
/*

 CricketPlayerDetails.attachSchema(new SimpleSchema({
 team: {
 type: String,
 label: "Batting Team",
 max: 50
 },
 playerNumber: {
 type: Number,
 label: "Player Number",
 max: 11
 },
 playerName: {
 type: String,
 label: "Player Name",
 max: 10
 },
 runs: {
 type: Number,
 label: "Runs Given",
 max: 500
 },
 ballPlayed: {
 type: Number,
 label: "Balls Played",
 max: 300
 }
 }));
 */
if (Meteor.isClient) {

    Session.setDefault("showRecordCricketMatch", false);
    Session.setDefault("cricketSummary", null);
    //Session.setDefault("liveRecord", Team1Batting.find({}));


    Meteor.subscribe("cricketMatch");
    Meteor.subscribe("cricketSession");
    Meteor.subscribe("cricketSessionEvent");

    Meteor.subscribe("team1OverScorecard");
    Meteor.subscribe("team2OverScorecard");
    Meteor.subscribe("team1PlayerScorecard");
    Meteor.subscribe("team2PlayerScorecard");


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
            Meteor.call("recordScoreOfCricketMatch", AutoForm.getFormValues("recordScoreOfCricketMatchForm").insertDoc);
        },
        "click #showResultsButton": function (event) {
            Session.set("showRecordCricketMatch", false);
            Session.set("cricketSummary", null);
        }
    });

    Template.liveScore.helpers({
        match: function () {
            if (Session.get("matchId"))
                return CricketMatch.findOne(Session.get("matchId"));
        },
        session: function () {
            if (Session.get("sessionId"))
                return CricketSession.findOne(Session.get("sessionId"));
            else {
                match = CricketMatch.findOne(Session.get("matchId"));
                toBeCreatedSession = {
                    matchId: match._id,
                    sessionNumber: match.currentSession + 1,
                    inning: Number.parseInt(match.currentSession/ 2 + 1),
                    battingTeam: match.team1,
                    bowlingTeam: match.team2
                };
                return toBeCreatedSession;
            }
        },
        sessionEvent: function () {
            if (Session.get("sessionEventId"))
                return CricketSessionEvent.findOne(Session.get("sessionEventId"));
            else {
                match = CricketMatch.findOne(Session.get("matchId"));
                session =  CricketSession.findOne(Session.get("sessionId"));
                toBeCreatedSessionEvent = {
                    matchId: match._id,
                    sessionId: session._id,
                    over: session.currentOver + 1,
                    ballSequence: session.ballSequence + 1,
                    ballInOver: session.ballInOver,
                    bowler: session.bowler,
                    onStrikePlayer : session.onStrike? session.player1 :  session.player2,
                    player1 : session.player1,
                    player2 : session.player2
                };
                console.log(toBeCreatedSessionEvent);
                return toBeCreatedSessionEvent;
            }
        },
        liveRecord: function () {
            currentlyBattingTeam = Team1Batting.findOne({"inning": 1});
            Session.set("currentlyBattingTeam", currentlyBattingTeam);
            return currentlyBattingTeam;
        },
        ballRecord: function () {
            return Team2Bowling.findOne({"inning": 1});
        }
    });

    Template.liveScore.events({
        "submit #cricketMatchForm": function (event) {
            match = AutoForm.getFormValues("cricketMatchForm").insertDoc;
            Meteor.call("startMatch", match, function (error, id) {
                Session.set('matchId', id);
            });
            return false;
        },
        "submit #cricketSessionForm": function (event) {
            var session = AutoForm.getFormValues("cricketSessionForm").insertDoc;
            session.matchId = Session.get("matchId");
            Meteor.call("startSession", session, function (error, id) {
                Session.set('sessionId', id);
            });
            return false;
        },
        "submit #cricketSessionEventForm": function (event) {
            var ball = AutoForm.getFormValues("cricketSessionEventForm").insertDoc;
            ball.matchId = Session.get("matchId");
            ball.sessionId = Session.get("sessionId");
            Meteor.call("recordBall", ball, function (error, id) {
                Session.set('lastSessionEventId', id);
            });
            return false;
        },

        "submit #liveScoreForm": function (event) {
            ball = AutoForm.getFormValues("liveScoreForm").insertDoc;

            liveRecord = Session.get("currentlyBattingTeam");
            //ball.runOfBatsman

            Meteor.call("recordLiveScore", ball, {});

            //update live record
            liveRecord.onStrike = shouldChangeStrike(ball.runOfBatsman, ball.ballInOver);
            liveRecord.player1 = ball.player1;
            liveRecord.player2 = ball.player2;

            Meteor.call("finishedRecordingABall");
            /*
             o = {};

             var ballType = ball.ballType;
             var row = Team1Batting.findOne({"inning": 1});
             var player = row.onStrike;
             o.teamRuns = Number(row.teamRuns);
             var player1 = Number(row.player1Run);
             var player2 = Number(row.player2Run);
             var teamrun = Number(row.teamRuns);
             var ball = event.target.ball.value;

             if (ballType === "valid") {

             if (player) {

             //  Team1Batting.update({"inning": 1}, {$set: {"player1Run": player1 + Number(event.target.run.value)}})
             // Meteor.call("updateTeamRun","player1Run", player1 + Number(event.target.run.value));

             }
             else {
             //Session.set("runOfPlayer2", player2 + Number(event.target.run.value));
             //  Team1Batting.update({"inning": 1}, {$set: {"player2Run": player2 + Number(event.target.run.value)}})
             // Meteor.call("updateTeamRun","player2Run", player2 + Number(event.target.run.value));

             }
             ball = Number(ball) + 1;
             //Session.set("teamRun", teamrun + Number(event.target.run.value));
             // Team1Batting.update({"inning":1},{$set:{"teamRuns": teamrun + Number(event.target.run.value)} })

             teamrun = teamrun + Number(event.target.run.value);
             }

             else if (ballType === "Wide") {

             if (player) {
             Session.set("runOfPlayer1", player1 + Number(event.target.run.value));

             }
             else {
             Session.set("runOfPlayer2", player2 + Number(event.target.run.value));

             }
             Session.set("teamRun", teamrun + Number(event.target.run.value) + 1);
             }

             if (ballType === "No Ball") {

             if (player) {
             Session.set("runOfPlayer1", player1 + Number(event.target.run.value));

             }
             else {
             Session.set("runOfPlayer2", player2 + Number(event.target.run.value));

             }
             ball = "no ball";
             Session.set("teamRun", teamrun + Number(event.target.run.value) + 1);
             }

             if (ballType === "Out1") {

             // store in db    Session.set("runOfPlayer1", Session.get("runOfPlayer1") + Number(event.target.run.value));
             if (player) {
             Session.set("runOfPlayer1", player1 + Number(event.target.run.value));

             }
             else {
             Session.set("runOfPlayer2", player2 + Number(event.target.run.value));

             }
             ball = Number(ball) + 1;
             Session.set("runOfPlayer1", 0);
             event.target.player1.value = "";
             Session.set("teamRun", teamrun + Number(event.target.run.value));
             }

             if (ballType === "Out2") {
             // Session.set("runOfPlayer2", Session.get("runOfPlayer2") + Number(event.target.run.value));
             if (player) {
             Session.set("runOfPlayer1", player1 + Number(event.target.run.value));

             }
             else {
             Session.set("runOfPlayer2", player2 + Number(event.target.run.value));

             }
             ball = Number(ball) + 1;
             Session.set("runOfPlayer2", 0);
             event.target.player2.value = "";
             Session.set("teamRun", teamrun + Number(event.target.run.value));
             }

             if (ballType === "Extra") {
             Session.set("teamRun", teamrun + Number(event.target.run.value));
             ball = Number(ball) + 1;
             }

             //Meteor.call("updateScore",teamRuns,onStrike,player1Run,player2Run,wickets,);

             //Meteor.call("recordLiveScoreOfCricketMatch", AutoForm.getFormValues("liveScoreForm").insertDoc, Session.get("runOfPlayer1"), Session.get("runOfPlayer2"), Session.get("teamRun"));
             event.target.ballType.value = "valid";
             event.target.ball.value = ball;*/
            return false;
        },

        "click #run0": function (event) {
            $("#runOfBatsman").attr('value', 0);
            $("#submitButton").click();
        },
        "click #run1": function (event) {
            $("#runOfBatsman").attr('value', 1);
            $("#submitButton").click();
        },
        "click #run2": function (event) {
            $("#runOfBatsman").attr('value', 2);
            $("#submitButton").click();
        },
        "click #run3": function (event) {
            $("#runOfBatsman").attr('value', 3);
            $("#submitButton").click();
        },
        "click #run4": function (event) {
            $("#runOfBatsman").attr('value', 4);
            $("#submitButton").click();
        },
        "click #run6": function (event) {
            $("#runOfBatsman").attr('value', 6);
            $("#submitButton").click();
        },
        "click #rotateStrike": function (event) {
            Meteor.call("rotateStrike",Session.get("sessionId"));
        }
    });

}

Meteor.methods({
    recordScoreOfCricketMatch: function (doc) {
        doc.cricketMatchDate = new Date();
        CricketMatchSummary.insert(doc);
    },
    startMatch: function (match) {
        match.matchDate = new Date();
        return CricketMatch.insert(match);

    },
    startSession: function (session) {
        var match = CricketMatch.findOne(session.matchId);
        session.startDate = new Date();
        session.sessionNumber = match.currentSession +1 ;
        var sessionId = CricketSession.insert(session);
        CricketMatch.update(match,{$set:{"currentSession":session.sessionNumber}});
        return sessionId;
    },
    shouldChangeStrike:function (runTaken, ballOfAnOver) {
        var LAST_BALL_OF_OVER = 6;
        var shouldRotate = false;
        if (runTaken == 1 || runTaken == 3) shouldRotate = true;
        if (ballOfAnOver == LAST_BALL_OF_OVER) shouldRotate = !shouldRotate;
        return shouldRotate;
    },
    recordBall: function (ball) {
        var match = CricketMatch.findOne(ball.matchId);

        var session = CricketSession.findOne(ball.sessionId);
        session.ballSequence++;
        ball.ballSequence = session.ballSequence;
        session.onStrike = !session.onStrike;

        ball.bowledOn = new Date();
        var sessionEventId = CricketSessionEvent.insert(ball);

        CricketSession.update(session,{$set:{"ballSequence":session.ballSequence,
                                            "onStrike":session.onStrike}});

        return sessionEventId;
    },
    rotateStrike: function (sessionId) {
        var session = CricketSession.findOne(sessionId);
        session.onStrike = !session.onStrike;
        console.log("rotating"+ session.onStrike );
        CricketSession.update(session,{$set:{"onStrike":session.onStrike}});
    },
    finishedRecordingABall: function () {
        Team2Bowling.update({"inning": 1}, {$inc: {"ballSequence": 1}});
    },
    updateScore: function (ab) {
        Team1Batting.update({"inning": 1}, {$set: {"teamRuns": ab.teamRuns}});
    },
    /*updateRun1: function (teamrun) {

     Team1Batting.update( {"inning":1},{$set: {"player1Run": teamrun }});
     },
     updateRun2: function (teamrun) {

     Team1Batting.update( {"inning":1},{$set: {"player2Run": teamrun }});
     },*/
    recordLiveScoreOfCricketMatch: function (doc, runOfPlayer1, runOfPlayer2, teamRun) {
        //doc.cricketMatchDate = new Date();

        doc.runOfPlayer1 = runOfPlayer1;
        doc.runOfPlayer2 = runOfPlayer2;
        doc.teamRun = teamRun;
        //BallByBallScore.insert(doc);
    }

});

if (Meteor.isServer) {
    Meteor.startup(function () {
        //CricketCricketMatchResults.insert({team1: "India", team2: "Australia", resultText: "Australia won by 9 wickets", CricketMatchDate: new Date(),runsOfTeam1:200,runsOfTeam2:190,wicketsOfTeam1:5,wicketsOfTeam2:8,team1Overs:50,team2Overs:50});
    });

    Meteor.publish("cricketMatch", function () {
        return CricketMatch.find();
    });
    Meteor.publish("cricketSession", function () {
        return CricketSession.find();
    });

    Meteor.publish("cricketSessionEvent", function () {
        return CricketSessionEvent.find();
    });

    Meteor.publish("team1OverScorecard", function () {
        return Team1OverScorecard.find();
    });
    Meteor.publish("team2OverScorecard", function () {
        return Team2OverScorecard.find();
    });
    Meteor.publish("team1PlayerScorecard", function () {
        return Team1PlayerScorecard.find();
    });
    Meteor.publish("team2PlayerScorecard", function () {
        return Team2PlayerScorecard.find();
    });

}