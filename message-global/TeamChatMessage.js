// ====================================================================================================
//
// Cloud Code for TeamChatMessage, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

// need server timestamp on messages
Spark.setScriptData("When", new Date().getTime());
Spark.setScriptData("f", "1");