var config = require("./config/config");
var utils = require("./util/db");

/**
 * Module dependencies.
 */
// add list of APIs here
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');

var app = express();

// all environments
app.set('port', process.env.PORT || config.HTTP_REST_PORT);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	// Error handler for development
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.json({
			message: err.message,
			error: err
		});
	});
}

// REST APIs path
app.get('/', routes.index);
app.post('/user/addTwoNumber', user.addTwoNumber);
app.post('/user/addUser', user.addUser);
app.post('/user/findUser', user.findUser);

// create server
http.createServer(app).listen(app.get('port'), function() {
	console.log('***Express server listening on port*** ' + app.get('port'));
});

// init mongo db
utils.init();
