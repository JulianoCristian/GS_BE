// ====================================================================================================
//
// Cloud Code for ListJoinRequests, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("CONSTANTS");
require("COMMON_TASKS");
require("COMMON_TEAM_TASKS");


var data = Spark.getData();


if( !Spark.hasScriptErrors() ) {
    
    var teamId = ensureTeamId( data );
    
    var requests = listJoinRequests( teamId );
    
    var players = [];
    for( var playerId in requests ) {
        players.add( getPlayerObject( Spark.loadPlayer(playerId) ) );
    }
    
    Spark.setScriptData("requests", players);
    
}