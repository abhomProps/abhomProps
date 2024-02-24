const mongoose = require('mongoose');
const config = require('../Config/config');

async function connectToDb() {
    try {
        await mongoose.connect(config.mongoURI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

module.exports = connectToDb;