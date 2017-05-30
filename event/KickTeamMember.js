// ====================================================================================================
//
// Cloud Code for KickTeamMember, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_TEAM_TASKS");


var data = Spark.getData();

var teamId = ensureTeamId( data );
var team = Spark.getTeams().getTeam(teamId);

// TODO: check if current user has permission - for now it's owner bound
var curr_user = Spark.getPlayer();
if( team.getOwnerId() !== curr_user.getPlayerId() ) {
    Spark.setScriptError("Permission", "NOTFOUND");
    Spark.exit();
}

var userId = data.UserId;

if( !isMember( team, userId ) ) {
    Spark.setScriptError("USER", "INVALID");
    Spark.exit();
}

// remove the player - no confirmation
team.removeMembers(userId);

updateMemberCount( teamId );
