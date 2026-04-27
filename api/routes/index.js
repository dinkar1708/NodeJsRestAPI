/*
 * GET home page - API info
 */

const packageJson = require('../package.json');

exports.index = function(req, res) {
	console.log("Default page...");
	res.json({
		name: packageJson.name,
		version: packageJson.version,
		status: 'running',
		endpoints: {
			addUser: 'POST /user/addUser',
			findUser: 'POST /user/findUser',
			addTwoNumber: 'POST /user/addTwoNumber'
		}
	});
};