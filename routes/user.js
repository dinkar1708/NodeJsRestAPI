var utils = require("../util/utils");
var response = require("../util/response");

var userSchema = require('../models/db/schema/user');
var User = require('../models/db/user');

/**
 * add two numbers
 */
exports.addTwoNumber = function(req, res) {
	console.log('addTwoNumber()..');
	// do business logic here
	var sum = utils.addTwoNumber(req.body.numberA, req.body.numberB);
	response.sendSuccessMessageJsonObject(res, null, 'sum', sum);
};

/**
 * add user in db
 */
exports.addUser = async function(req, resp) {
	console.log('addUser()..');

	console.log("--------------------------");
	console.log("user request");
	console.log(req.body);
	console.log("--------------------------");

	try {
		var name = req.body.name;
		var address = req.body.address;

		const UserFound = await findUser(name);

		if (UserFound) {
			// user found update it
			console.log("addUser() found existing.");
			UserFound.address = address;
			await UserFound.save();
			response.sendSuccessMessage(resp, "User updated successfully!");
			return;
		}

		// add new user
		var userNew = new User(name, address);
		// save user in db
		try {
			await userNew.save();
			response.sendSuccessMessage(resp, "User Added.");
		} catch (err) {
			response.handleDbError(resp, err);
		}

	} catch (e) {
		console.log("addUser error " + e);
		response.sendServerCommunicationError(resp, e);
	}
};

/**
 * find user in db
 */
exports.findUser = async function(req, resp) {
	console.log('findUser()..');

	console.log("--------------------------");
	console.log("findUser request");
	console.log(req.body);
	console.log("--------------------------");

	try {
		var name = req.body.name;

		const User = await findUser(name);

		if (User) {
			// user found
			console.log("findUser() found existing.");
			response.sendSuccessMessageJsonObject(resp, null, 'user', User);
			return;
		}

		// not found
		response.sendErrorMessageJsonObject(resp, "User not found!", 'user', null);

	} catch (e) {
		console.log("findUser error " + e);
		response.sendServerCommunicationError(resp, e);
	}
};

/**
 * find user from db
 *
 * @param name
 */
var findUser = async function(name) {
	console.log("find user by name " + name);
	try {
		const User = await userSchema.findOne({ 'name': name });
		console.log("findUser() User  " + User);
		return User;
	} catch (err) {
		console.log("findUser() error: " + err);
		throw err;
	}
};