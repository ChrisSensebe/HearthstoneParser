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
		var allSets = JSON.parse(data);
		var keys    = Object.keys(allSets);
		var sets    = [];
		for(var property in allSets){
			sets = sets.concat(allSets[property]);
		}
		db.collection('allSets').insert(sets, function(err, doc){
			if(err){
				console.error(err);
			}
			console.log('document inserted');
		});
		db.close();
	});
});