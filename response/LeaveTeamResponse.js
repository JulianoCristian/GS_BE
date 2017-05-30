// ====================================================================================================
//
// Cloud Code for LeaveTeamResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_TEAM_TASKS");


if( !Spark.hasScriptErrors() ) {
    
    var teamId = Spark.getData().TeamId;

    updateMemberCount( teamId );

}

