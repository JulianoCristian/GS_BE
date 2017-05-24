// ====================================================================================================
//
// Cloud Code for EndSessionResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

var GlobalTeamId = "globalteamid";

var response = Spark.getData();

// join GlobalTeam on Auth success
if( !response.hasOwnProperty("error") ) {
    //var userId = response.userId;
    
    var request = new SparkRequests.LeaveTeamRequest();
    request.ownerId = null;
    request.teamId = GlobalTeamId;
    request.teamType = "GlobalTeam";
    var leave_response = request.Send();
    
    // give back error
    if( leave_response.hasOwnProperty("error") )
        Spark.setScriptError( "LeaveTeamRequest", leave_response.error );
    
}

Spark.setScriptData("version", 1);  // for debug