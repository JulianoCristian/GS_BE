// ====================================================================================================
//
// Cloud Code for GetTeamResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_TASKS");
require("COMMON_TEAM_TASKS");


Spark.setScriptData("script_version", 2);  // for debug

var data = Spark.getData();
if( !data.hasOwnProperty("error") ) {
    
    var team_extra_data = null;

    if( data.hasOwnProperty("teams") && data.teams.length > 0 ) {

        var teamId = data.teams[0].teamId;
        team_extra_data = getTeamExtraData( teamId );

    }
    
    Spark.setScriptData("team_extra_data", team_extra_data);
    
    // player extra data is in player's scriptData
    
}