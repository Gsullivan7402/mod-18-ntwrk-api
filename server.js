const db = require('./config/connection');
const routes = require('./routes');
const express = require('express');
const mongoose = require('mongoose'); // Ensure Mongoose is required
const Comment = require('./models/Comment'); // Adjust the path as necessary

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
            .then(() => {
                console.log('Database dropped successfully.');
                
                // Debug test: Attempt to create a comment immediately after dropping the database
                Comment.create({ commentText: 'Test comment', username: 'tester', reactions: [] })
                    .then(comment => console.log('Debug Test Comment created:', comment))
                    .catch(err => console.error('Debug Test Comment creation error:', err));
            })
            .catch(err => console.error('Error dropping database:', err));
    }

    // Delay the server listening to ensure the debug test for comment creation runs first
    setTimeout(() => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
        });
    }, 1000); // Delay for 1 second; adjust as necessary 
});
