// ====================================================================================================
//
// Cloud Code for CreateTeamResponse, write your code here to customize the GameSparks platform.
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
    
    var teamId = ensureTeamId( data );
    
    setPlayerGuild( Spark.getPlayer(), teamId );
    
    // save extra data
    data.scriptData["_id"] = teamId;
    data.scriptData["max_member_count"] = GUILD_MAX_MEMBER_COUNT;
    data.scriptData["member_count"] = 1;
    data.scriptData["prestige"] = 0;
    data.scriptData["score"] = 0;

    Spark.runtimeCollection("guildExtraData").save(data.scriptData);
    Spark.runtimeCollection("guildPendingRequests").save({"_id": teamId, "requests": {}});

    setScriptExtraData(data.scriptData);
    
}
