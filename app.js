var mongodb     = require('mongodb'),
	fs          = require('fs'),
	MongoClient = mongodb.MongoClient;

MongoClient.connect("mongodb://localhost:27017/hearthstone", function(err, db){

	if(err){
		console.error(err);
	}
	fs.readFile('ALLSets.json', function(err, data){
		if(err){
			console.error(err);
		}
		var allSets  = JSON.parse(data);
		var allCards = [];
		for(var property in allSets){
			allCards = allCards.concat(allSets[property]);
		}

		db.collection('allSets').insert(allCards, function(err, result){
			if(err){
				console.error(err);
			};
			console.log('Document inserted');
		});
		db.close();
	});
});