// ====================================================================================================
//
// Cloud Code for ListTeamsResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

require("COMMON_TASKS");
require("COMMON_TEAM_TASKS");


Spark.setScriptData("script_version", 2);

var data = Spark.getData();
if( !data.hasOwnProperty("error") ) {
    
    var team_extra_data_list = null;
    
    if( data.hasOwnProperty("teams") ) {
        
        team_extra_data_list = [];
        for( var i = 0; i < data.teams.length; i++ ) {
            
            var teamId = data.teams[i].teamId;
            var extra_data = getTeamExtraData( teamId );
            team_extra_data_list.push( (extra_data === null ? {} : extra_data) );

        }
        
    }
    
    Spark.setScriptData("team_extra_data_list", team_extra_data_list);
    
}