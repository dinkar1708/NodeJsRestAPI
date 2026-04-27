var mongoose = require('mongoose');
var config = require("../config/config");
module.exports = {
	init : function() {
		initialize();
	}
};

var initialize = function() {

	const MONGO_URL = `mongodb://${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_DB}`;

	console.log(`Connecting to MongoDB at: ${MONGO_URL}`);

	mongoose.connect(MONGO_URL).catch(err => {
		console.log('\nMongoose initial connection error: ' + err);
	});

	mongoose.connection.on('connected', function() {
		console.log('\nMongoose on(connected) default connection open to ' + MONGO_URL);
	});

	mongoose.connection.on('error', function(e) {
		console.log('\nMongoose on(error) connection error: ' + e);
	});

	mongoose.connection.on('disconnected', function() {
		console.log('\nMongoose on(disconnected) disconnected.');
	});

	module.exports = mongoose;
};