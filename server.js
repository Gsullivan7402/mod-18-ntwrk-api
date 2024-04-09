const db = require('./config/connection');
const routes = require('./routes');
const express = require('express');
const mongoose = require('mongoose'); // Ensure Mongoose is required

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once('open', () => {
    // Check if we are in development mode
    if (process.env.NODE_ENV === 'development') {
        // Drop the database to start fresh every time the application starts
        mongoose.connection.db.dropDatabase()
            .then(() => console.log('Database dropped successfully.'))
            .catch(err => console.error('Error dropping database:', err));
    }

    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
