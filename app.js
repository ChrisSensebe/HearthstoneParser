var mongodb     = require('mongodb'),
	fs          = require('fs'),
	MongoClient = mongodb.MongoClient;

MongoClient.connect("mongodb://localhost:27017/hearthstone", function(err, db){

	if(err){
		return console.error(err);
	}
	fs.readFile('ALLSets.json', function(err, data){
		if(err){
			return console.error(err);
		}
		db.collection('allSets').save(JSON.parse(data), function(err, doc){
			if(err){
				return console.error(err);
			}
			console.log('document inserted');
			db.close();
		});
	});
});