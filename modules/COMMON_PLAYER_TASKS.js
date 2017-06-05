// ====================================================================================================
//
// Cloud Code for COMMON_PLAYER_TASKS, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================


function setPlayerExtraData( player, extra_data ) {
    player.setScriptData("extra_data", extra_data);
}

function getPlayerExtraData( player ) {
    var extra_data = player.getScriptData("extra_data");
    if( typeof extra_data === "undefined" )
        extra_data = null;
    return extra_data;
}

function getPlayerObject( player ) {
    var player_obj = null;
    
    if( typeof player !== "undefined" && player !== null ) {
        player_obj = {
            "displayName": player.getDisplayName(),
            "id": player.getPlayerId(),
            "online": player.isOnline(),
            "scriptData": getPlayerExtraData( player ),
        };
    }
    
    return player_obj;
}

function modifyCurrentCharacter( player, character_data ) {
    
};

