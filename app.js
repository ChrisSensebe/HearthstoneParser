var mongodb     = require('mongodb'),
	fs          = require('fs'),
	MongoClient = mongodb.MongoClient;

// Connects to db
MongoClient.connect("mongodb://localhost:27017/hearthstone", function(err, db){

	if(err){
		console.error(err);
	}
	// Gets data from file ALLSets.json -> {collection : [{card},{card}...], collection : [{card},{card}...], ....}
	fs.readFile('ALLSets.json', function(err, data){
		if(err){
			console.error(err);
		}
		var allSets  = JSON.parse(data);
		var allCards = [];
		// Populates allCards with card data -> [{card}, {card}, ...]
		for(var property in allSets){
			// Adds set name for each card
			for(var i=0; i<allSets[property].length; i++){
				allSets[property][i].set = property;
			}
			allCards = allCards.concat(allSets[property]);
		}
		// Saves all cards in db
		db.collection('allSets').insert(allCards, function(err, result){
			if(err){
				console.error(err);
			};
			console.log('Cards saved in db');
			db.close();
		});
	});
});