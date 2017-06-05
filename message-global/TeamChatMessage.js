// ====================================================================================================
//
// Cloud Code for TeamChatMessage, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_PLAYER_TASKS");


Spark.setScriptData("script_version", 2);

var data = Spark.getData();

// need server timestamp on messages
Spark.setScriptData("When", new Date().getTime());

var player = Spark.loadPlayer(data.fromId);
Spark.setScriptData("player_extra_data", getPlayerObject( player ));

