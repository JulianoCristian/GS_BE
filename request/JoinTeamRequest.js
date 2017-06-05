// ====================================================================================================
//
// Cloud Code for JoinTeamRequest, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("CONSTANTS");
require("COMMON_TEAM_TASKS");


// ensure teamId
var teamId = ensureTeamId( Spark.getData() );
if( typeof teamId === "undefined" || teamId === null || teamId === "" )
    Spark.exit();   // invalid team so requet will fail

    
// check if guild type is open
var extra_data = getTeamExtraData( teamId );    // TODO: only need type

if( extra_data.type === GUILD_TYPES.OPEN ) {
    // open so proceed with join
    Spark.exit();
} else if( extra_data.type === GUILD_TYPES.INVITE_ONLY ) {
    
    // invite only, so record request
    addJoinRequest( teamId, Spark.getPlayer() );
    Spark.setScriptError("GUILD_OPTION", "INVITE_ONLY");
    Spark.exit();

} else {
    
    // return all kinds of bad
    Spark.setScriptError("GUILD_OPTION", "WRONG_TYPE");
    Spark.exit();

}
