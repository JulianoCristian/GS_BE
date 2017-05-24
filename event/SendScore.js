// ====================================================================================================
//
// Cloud Code for SendScore, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

var leaderboard_short_code = Spark.getData().LeaderboardShortCode;
var score_json = JSON.parse(Spark.getData().ScoreJSON);

var response = null;
if( leaderboard_short_code == "GlobalScore" ) {

    var request = new SparkRequests.LogEventRequest();
    request.eventKey = "RecordGlobalScore";
    request.TestScore = score_json.TestScore;
    response = request.Send();

} else {
    Spark.setScriptError("LeaderboardShortCode", "INVALID");
}

if( response !== null && response.hasOwnProperty("error") ) {
    Spark.setScriptError(leaderboard_short_code, response.error);
}