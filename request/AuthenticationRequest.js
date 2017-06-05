// ====================================================================================================
//
// Cloud Code for AuthenticationRequest, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_TASKS");


var data = Spark.getData();

// TODO: validate scriptData against version
var scriptData = data.scriptData;

setScriptExtraData( scriptData );
