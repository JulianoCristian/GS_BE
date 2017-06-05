// ====================================================================================================
//
// Cloud Code for COMMON_LEADERBOARD_TASKS, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("CONSTANTS");


function getLeaderboardObject( lb_short_code ) {
    var lb_obj = {};
    
    var lb = Spark.getLeaderboards().getLeaderboard(lb_short_code);
    if( typeof lb !== "undefined" && lb !== null ) {

        lb_obj = {
            "ShortCode": lb_short_code,
            "Name": lb.getName(),
            "Description": lb.getDescription(),
            "Fields": lb.getScoreFields(),
        };
    
    }
    
    return lb_obj;
}
    
function getGlobalPlayerLb() {
    return getLeaderboardObject( GLOBAL_PLAYER_LB_ID );
}
    
function getGlobalCharacterLb() {
    return getLeaderboardObject( GLOBAL_CHARACTER_LB_ID );
}
    
    
    