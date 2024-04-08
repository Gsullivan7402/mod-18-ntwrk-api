const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  debug: true,
};

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/shareyourthoughts';

mongoose.connect(connectionString, options).catch(error => console.error('MongoDB connection error:', error));

module.exports = mongoose.connection;
