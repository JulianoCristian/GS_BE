// ====================================================================================================
//
// Cloud Code for COMMON_TEAM_TASKS, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

function ensureTeamId( data ) {
    var teamId = data.teamId;
    if( typeof teamId === 'undefined' || teamId === null || teamId === "" ) {
        var team = Spark.getTeams().getTeamByOwnerIdAndTeamType(data.ownerId, data.teamType);
        if( team !== null && team.length > 0 ) 
            teamId = team[0].getTeamId();
    }
    return teamId;
}

function updateMemberCount( teamId ) {
    var team = Spark.getTeams().getTeam(teamId);
    Spark.runtimeCollection("guildExtraData").findAndModify({"_id": teamId}, {"member_count": team.getMemberIds().length});
}

function getExtraData( teamId ) {
    return Spark.runtimeCollection("guildExtraData").findOne({"_id": teamId});
}

