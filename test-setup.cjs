
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env.yaml file
dotenv.config({ path: path.resolve(__dirname, '.env.yaml') });
