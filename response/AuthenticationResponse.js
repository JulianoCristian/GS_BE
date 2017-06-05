// ====================================================================================================
//
// Cloud Code for AuthenticationResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_PLAYER_TASKS");
require("COMMON_TEAM_TASKS");
require("COMMON_LEADERBOARD_TASKS");

Spark.setScriptData("script_version", 4);  // for debug


var data = Spark.getData();

if( !data.hasOwnProperty("error") ) {

    var player = Spark.getPlayer();
    
    // TODO: validate extradata and update
    setPlayerExtraData(player, data.scriptData);
    Spark.setScriptData("last_login_ts", player.getLastSeen());

    // join the global chat and get object
    var global_chat = getGlobalChat();
    joinGuild( global_chat );
    Spark.setScriptData( "GlobalChatTeam", getGuildObject(global_chat) );
    
    // get scoreboards
    Spark.setScriptData( "GlobalPlayerLb", getGlobalPlayerLb() );
    Spark.setScriptData( "GlobalCharacterLb", getGlobalCharacterLb() );
    
    // get guild if has
    var guild = getPlayerGuild( Spark.getPlayer() );
    Spark.setScriptData( "Guild", getGuildObject( guild ) );
    
}
