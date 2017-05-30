// ====================================================================================================
//
// Cloud Code for COMMON_TASKS, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================


function setExtraData( extra_data ) {
    for( var key in extra_data ) {
        if( extra_data.hasOwnProperty(key) ) {
            Spark.setScriptData(key, extra_data[key]);
        }
    }
}
