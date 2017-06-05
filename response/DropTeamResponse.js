// ====================================================================================================
//
// Cloud Code for DropTeamResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("CONSTANTS");
require("COMMON_TASKS");
require("COMMON_TEAM_TASKS");

Spark.setScriptData("script_version", 4);  // for debug


var data = Spark.getData();
if( !data.hasOwnProperty("error") ) {
    
    var teamId = ensureTeamId( data.scriptData );
    
    setPlayerGuild( Spark.getPlayer(), null );
    setTeamExtraData( teamId, null );

}