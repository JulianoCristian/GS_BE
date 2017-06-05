// ====================================================================================================
//
// Cloud Code for ListTeamChatResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_PLAYER_TASKS");


Spark.setScriptData("script_version", 1);

var data = Spark.getData();
if( !data.hasOwnProperty("error") ) {
    
    var player_extra_data_list = null;
    
    if( data.hasOwnProperty("messages") ) {
        
        player_extra_data_list = [];
        for( var i = 0; i < data.messages.length; i++ ) {
            
            var player_id = data.messages[i].fromId;
            var player = Spark.loadPlayer(player_id);
            var extra_data = null;
            if( typeof player !== "undefined" && player !== null )
                extra_data = getPlayerObject( player ); // for online status
            player_extra_data_list.push( (extra_data === null ? {} : extra_data) );

        }
        
    }
    
    Spark.setScriptData("player_extra_data_list", player_extra_data_list);
    
}