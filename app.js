var mongodb     = require('mongodb'),
	fs          = require('fs');

fs.readFile('allSets.json', function(err, data){
	if(err){
		return callback(err);
	}
	var sets = JSON.parse(data);
});