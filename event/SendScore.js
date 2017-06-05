// ====================================================================================================
//
// Cloud Code for SendScore, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

var leaderboard_short_code = Spark.getData().LeaderboardShortCode;
var score_json = null;
try {
    score_json = JSON.parse(Spark.getData().ScoreJSON);
} catch (e) {
    Spark.setScriptError("ScoreJSON", "INVALID");
    Spark.exit();
}

var response = null;
if( leaderboard_short_code == "GlobalPlayerLb" ) {

    var request = new SparkRequests.LogEventRequest();
    request.eventKey = "RecordGlobalPlayerScore";
    request.TestScore = score_json.TestScore;
    response = request.Send();

} else if( leaderboard_short_code == "GlobalCharacterLb" ) {

    var request = new SparkRequests.LogEventRequest();
    request.eventKey = "RecordGlobalCharacterScore";
    request.TestScore = score_json.TestScore;
    response = request.Send();

} else {
    Spark.setScriptError("LeaderboardShortCode", "INVALID");
}

if( typeof response !== "undefined" && response !== null && response.hasOwnProperty("error") ) {
    Spark.setScriptError(leaderboard_short_code, response.error);
    Spark.exit();
}


