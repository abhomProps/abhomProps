require('dotenv').config();

const config = {
    mongoURI: process.env.MONGO_URL,
};
module.exports = config;