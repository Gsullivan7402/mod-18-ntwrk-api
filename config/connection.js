const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/shareyourthoughts';

mongoose.connect(connectionString)
    .catch(error => console.error('MongoDB connection error:', error));


mongoose.set('debug', true);

module.exports = mongoose.connection;
