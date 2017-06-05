// ====================================================================================================
//
// Cloud Code for LeaveTeamResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_TEAM_TASKS");


Spark.setScriptData("script_version", 1);

var data = Spark.getData();
if( !data.hasOwnProperty("error") ) {
    
    var teamId = data.teamId;
    updateMemberCount( teamId );
    
    var player = Spark.getPlayer();
    setPlayerGuild( player, null );

}

