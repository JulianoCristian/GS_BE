// ====================================================================================================
//
// Cloud Code for UpdateTeamData, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("CONSTANTS");
require("COMMON_TASKS");
require("COMMON_TEAM_TASKS");


var data = Spark.getData();

// TODO: permission check

//
// there must be properties even if empty
var Properties = data.scriptData;
try {
    Properties = JSON.parse(Properties);
} catch( e ) {
    Spark.setScriptError("Properties", "INVALID");
    Spark.exit();
}

// TODO: validate values

var teamId = ensureTeamId( data );
var extra_data = Spark.runtimeCollection("guildExtraData");
extra_data.findAndModify({"_id": teamId}, Properties);
