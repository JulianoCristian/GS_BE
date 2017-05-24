// ====================================================================================================
//
// Cloud Code for ChatMessage, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

//CSV of Player IDs
var ID= Spark.getData().Players;
//Message string
var chatString = Spark.getData().Message;
//Sender displayName
var dName = Spark.getPlayer().getDisplayName();

//Message param is null if you're not using a custom extension of scriptMessage
var msg = Spark.message(null);

if( ID === "" ) {
    
    msg.setMessageData({"isGlobal": true, "sender": dName, "message":chatString});

    // TODO: get all players - most likely in small quantities
    var players = Spark.systemCollection("player").find();
    var c = players.count();
    while( players.hasNext() ) {
        var player = players.next();
        var player_id = player._id.$oid;
        //if( player_id == Spark.getPlayer().getPlayerId() ) continue;
        msg.setPlayerIds(player._id.$oid);
        msg.send();
    }

} else {

    msg.setMessageData({"isGlobal": false, "sender": dName, "receiverId": ID, "message":chatString});
    
    var ids = ID.split(',');
    for( var i = 0; i < ids.length; i++ ) {
        msg.setPlayerIds(ids[i]);
        msg.send();
    }
  
    // to self
    var msg = Spark.message(null);
    msg.setPlayerIds(Spark.getPlayer().getPlayerId());
    msg.setMessageData({"isGlobal": false, "sender": dName, "receiverId": ID, "message":chatString});
    msg.send();

}

