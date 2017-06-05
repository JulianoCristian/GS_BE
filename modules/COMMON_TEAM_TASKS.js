// ====================================================================================================
//
// Cloud Code for COMMON_TEAM_TASKS, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("CONSTANTS");
require("COMMON_PLAYER_TASKS");


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
    Spark.runtimeCollection("guildExtraData").findAndModify({"_id": teamId}, {$set: {"member_count": team.getMemberIds().length}});
}

function getTeamExtraData( teamId ) {
    var extra_data = Spark.runtimeCollection("guildExtraData").findOne({"_id": teamId});
    if( typeof extra_data === "undefined")
        extra_data = null;
    
    return extra_data;
}

function setTeamExtraData( teamId, extra_data ) {
    if( extra_data === null ) {
        Spark.runtimeCollection("guildExtraData").remove({"_id": teamId});
    } else {
        Spark.runtimeCollection("guildExtraData").findAndModify({"_id": teamId}, {$set: extra_data});
    }
}

function addJoinRequest( teamId, player ) {
    
    var data = {
        "requests":{
        }
    };
    data.requests[player.getPlayerId()] = 1;
    
    Spark.runtimeCollection("guildPendingRequests").findAndModify({"_id": teamId}, {$set: data});
}

function removeJoinRequest( teamId, player ) {
    
    var data = {
        "requests":{
        }
    };
    data.requests[player.getPlayerId()] = 1;
    
    Spark.runtimeCollection("guildPendingRequests").findAndRemove({"_id": teamId}, data);
}

function listJoinRequests( teamId ) {
    return Spark.runtimeCollection("guildPendingRequests").findOne({"_id": teamId},{"requests":1});
}

function getGuildObject( team ) {
    var guild_obj = null;
    
    if( typeof team !== "undefined" && team !== null ) {
        
        var teamId = team.getTeamId();
        var owner = Spark.loadPlayer(team.getOwnerId());
        
        var owner_obj = getPlayerObject( owner );
        var extra_data = getTeamExtraData( teamId );
        
        guild_obj = {
            "teamId": teamId,
            "teamName": team.getTeamName(),
            "teamType": team.getTeamType(),
            "owner": owner_obj,
            "scriptData": extra_data
        };
        
    }
    
    return guild_obj;   
}

function getGlobalChat() {
    var team = Spark.getTeams().getTeam(GLOBAL_CHAT_TEAM_ID);
    if( typeof team === "undefined" )
        team = null;
    return team;
}

function setPlayerGuild( player, teamId ) {
    if( teamId === null ) {
        player.removePrivateData("guildId");
    } else {
        player.setPrivateData("guildId", teamId);   // no need to return this directly
    }
}

function getPlayerGuildId( player ) {
    return player.getPrivateData("guildId");
}

function getPlayerGuild( player ) {
    var team = null;
    
    var guildId = getPlayerGuildId( player );
    if( typeof guildId !== "undefined" && guildId !== null && guildId !== "" ) {

        team = Spark.getTeams().getTeam(guildId);
        if( typeof team === "undefined")
            team = null;
        
    }
    
    return team;
}

function joinGuild( team ) {
    if( typeof team !== "undefined" && team !== null ) {
        team.addMembers(Spark.getPlayer().getPlayerId());
        updateMemberCount( team.getTeamId() );
    }
}

function leaveGuild( team ) {
    if( typeof team !== "undefined" && team !== null ) {
        team.removeMembers(Spark.getPlayer().getPlayerId());
        updateMemberCount( team.getTeamId() );
    }
}



