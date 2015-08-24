var mongodb        = require('mongodb'),
	fs             = require('fs'),
	MongoClient    = mongodb.MongoClient,
	filePath       = process.argv[2],
	databaseUrl    = process.argv[3],
	collectionName = process.argv[4];

// Connects to db
MongoClient.connect(databaseUrl, function(err, db){

	if(err){
		console.error(err);
	}
	// Gets data from file ALLSets.json -> {collection : [{card},{card}...], collection : [{card},{card}...], ....}
	fs.readFile(filePath, function(err, data){
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
		db.collection(collectionName).insert(allCards, function(err, result){
			if(err){
				console.error(err);
			}
			console.log('Cards saved in db');
			db.close();
		});
	});
});