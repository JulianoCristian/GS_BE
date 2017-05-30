// ====================================================================================================
//
// Cloud Code for GetTeamResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

if( !Spark.hasScriptErrors() ) {
    
    var extra_data = Spark.runtimeCollection("teamExtraData");
    var result = extra_data.find({"_id": {"$oid": teamId }});

    for (var property in result) {
        if (result.hasOwnProperty(property)) {
            Spark.setScriptData(property, result[property]);
        }
    }

}