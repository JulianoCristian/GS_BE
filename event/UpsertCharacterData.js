// ====================================================================================================
//
// Cloud Code for UpsertCharacterData, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_PLAYER_TASKS");


var player = Spark.getPlayer();
var data = Spark.getData();

var extra_data = data.scriptData;


// TODO: eval character data


extra_data["active"] = true;

modifyCurrentCharacter( player, character_data );

