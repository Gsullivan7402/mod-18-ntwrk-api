const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required'],
        match: [/.+@.+\..+/, 'Please fill a valid email address']
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment' // Ensure this refers to the updated Thought/Comment model as needed
    }],
    pals: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    toJSON: {
        virtuals: true
    },
    id: false
});

// Calculate and return the number of pals the user has
UserSchema.virtual('palCount').get(function() {
    return this.pals.length;
});

const User = model('User', UserSchema);

module.exports = User;
