// ====================================================================================================
//
// Cloud Code for RegistrationResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

var GlobalTeamId = "globalteamid";
var GlobalTeamName = "GlobalTeam";
var GlobalTeamType = "GlobalTeam";

var GlobalLeaderboardShortCode = "GlobalScore";

var GuildTeamType = "BasicGuild";

var response = Spark.getData();

if( !response.hasOwnProperty("error") ) {

    //
    // join GlobalTeam - for global chat
    //
    var jointeam_request = new SparkRequests.JoinTeamRequest();
    jointeam_request.ownerId = null;
    jointeam_request.teamId = GlobalTeamId;
    jointeam_request.teamType = GlobalTeamType;
    var jointeam_response = jointeam_request.Send();

    var GlobalTeam = {
        "teamId": GlobalTeamId,
        "teamName": GlobalTeamName,
        "teamType": GlobalTeamType,
        "owner": null,
        "scriptData": jointeam_response.scriptData
    };
   
    // handle error
    if( jointeam_response.hasOwnProperty("error") ) {
        
        // if already joined then leave it be
        if( !(jointeam_response.error.hasOwnProperty("teamType") && jointeam_response.error.teamType == "MAX_MEMBERSHIP_REACHED") &&
            !(jointeam_response.error.hasOwnProperty("members") && jointeam_response.error.teamType == "ALREADY_JOINED") ) {
            Spark.setScriptError( "GlobalTeam", jointeam_response.error );
        } else {
            
            // get team data then
            var getteam_request = new SparkRequests.GetTeamRequest();
            getteam_request.ownerId = null;
            getteam_request.teamId = GlobalTeamId;
            getteam_request.teamType = GlobalTeamType;
            var getteam_response = getteam_request.Send();
        
            // just to be safe
            if( !getteam_response.hasOwnProperty("error") ) {
                GlobalTeam.owner = getteam_response.owner;
            }
        }
        
    } else {
        GlobalTeam.owner = getteam_response.owner;
    }
    
    Spark.setScriptData( "GlobalTeam", GlobalTeam );
    
    //
    // send global scoreboard data
    //
    var global_lb = Spark.getLeaderboards().getLeaderboard(GlobalLeaderboardShortCode);
    var global_lb_name = global_lb.getName();
    var global_lb_desc = global_lb.getDescription();
    
    Spark.setScriptData("GlobalScore", {
        "ShortCode": GlobalLeaderboardShortCode,
        "Name": global_lb_name,
        "Description": global_lb_desc,
    });
    
    
    // player shouldn't have a guild on register!
    
    
}

Spark.setScriptData("version", 3);  // for debug
