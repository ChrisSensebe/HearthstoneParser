var mongodb     = require('mongodb'),
	fs          = require('fs'),
	MongoClient = mongodb.MongoClient;


MongoClient.connect("mongodb://localhost:27017/hearthstone", function(err, db){
	if(err){
		return callback(err);
	}
	fs.readFile('allSets.json', logKeys);
});

function logKeys(err, data){
	if(err){
		return callback(err);
	}
	var keys = Object.keys(JSON.parse(data));
	console.log(keys);
}