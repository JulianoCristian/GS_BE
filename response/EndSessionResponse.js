// ====================================================================================================
//
// Cloud Code for EndSessionResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_TEAM_TASKS");


Spark.setScriptData("script_version", 2);  // for debug

var data = Spark.getData();

// leave GlobalTeam on session end
if( !data.hasOwnProperty("error") ) {

    // leave the global chat and get object
    var global_chat = getGlobalChat();
    leaveGuild( global_chat );

}




