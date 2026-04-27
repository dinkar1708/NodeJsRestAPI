// Load environment variables based on NODE_ENV
const path = require('path');
const dotenv = require('dotenv');

// Determine which .env file to load
const envFile = process.env.NODE_ENV === 'development' ? '.env.dev' : '.env.local';
const envPath = path.resolve(__dirname, '..', envFile);

// Load environment variables
dotenv.config({ path: envPath });

// application configuration
module.exports = {
	// MongoDB configuration
	MONGO_HOST: process.env.MONGO_HOST || 'localhost',
	MONGO_PORT: process.env.MONGO_PORT || 27017,
	MONGO_DB: process.env.MONGO_DB || 'REST_DEMO',

	// For backward compatibility
	HOST_IP: process.env.MONGO_HOST || process.env.HOST_IP || 'localhost',
	HTTP_REST_PORT: process.env.PORT || 3000,
};
