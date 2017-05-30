// ====================================================================================================
//
// Cloud Code for JoinTeamResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_TASKS");
require("COMMON_TEAM_TASKS");


var data = Spark.getData();

if( !Spark.hasScriptErrors() ) {
    
    var teamId = Spark.getData().teamId;    // must have one

    updateMemberCount( teamId );

    setExtraData( getExtraData( teamId ) );    
    
    // TODO: leaderboard???
}

