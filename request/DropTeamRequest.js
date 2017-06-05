// ====================================================================================================
//
// Cloud Code for DropTeamRequest, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_TASKS");


var data = Spark.getData();

var scriptData = {
    "teamId": data.teamId,
    "teamType": data.teamType,
    "ownerId": data.ownerId
};

setScriptExtraData( scriptData );

