A complete step by step of how to use the ntwrk api. breaking down every step for easy demonstration.

Start the Server

    Location: Terminal or Command Prompt in your project directory.
    Type: npm start
    Visual: Look for a message indicating the server is running, typically "API server running on port 3001!"

Create Users

    Location: Insomnia
    Action: Create a new POST request named "Create User".
    URL: http://localhost:3001/api/users
    Body: Set to JSON and type:

    json

    {
      "username": "JaneDoe",
      "email": "janedoe@example.com"
    }

    Send: Click the "Send" button.

List Users

    Location: Insomnia
    Action: Create a new GET request named "List Users".
    URL: http://localhost:3001/api/users
    Send: Click the "Send" button.

Get a Single User

    Location: Insomnia
    Action: Duplicate "List Users" request, rename to "Get User", and adjust the URL.
    URL: http://localhost:3001/api/users/<userId> (Replace <userId> with actual ID)
    Send: Click the "Send" button.

Update a User

    Location: Insomnia
    Action: Duplicate "Create User", rename to "Update User", change method to PUT, and adjust the URL and body.
    URL: http://localhost:3001/api/users/<userId>
    Body:

    json

    {
      "username": "JaneDoeUpdated"
    }

    Send: Click the "Send" button.

Add a Pal

    Location: Insomnia
    Action: Create a new POST request named "Add Pal".
    URL: http://localhost:3001/api/users/<userId>/pals/<palId>
    Send: Click the "Send" button.

Create a Comment

    Location: Insomnia
    Action: Create a new POST request named "Create Comment".
    URL: http://localhost:3001/api/comments
    Body:

    json

    {
      "commentText": "This is a comment",
      "username": "JaneDoe",
      "userId": "<userId>"
    }

    Send: Click the "Send" button.

List Comments

    Location: Insomnia
    Action: Create a new GET request named "List Comments".
    URL: http://localhost:3001/api/comments
    Send: Click the "Send" button.

Update a Comment

    Location: Insomnia
    Action: Duplicate "Create Comment", rename to "Update Comment", change method to PUT, and adjust the URL and body.
    URL: http://localhost:3001/api/comments/<commentId>
    Body:

    json

    {
      "commentText": "Updated comment"
    }

    Send: Click the "Send" button.

Add a Reaction to a Comment

    Location: Insomnia
    Action: Create a new POST request named "Add Reaction".
    URL: http://localhost:3001/api/comments/<commentId>/reactions
    Body:

    json

    {
      "reactionBody": "This is a reaction",
      "username": "JohnDoe"
    }

    Send: Click the "Send" button.

Delete a Reaction from a Comment

    Location: Insomnia
    Action: Create a new DELETE request named "Delete Reaction".
    URL: http://localhost:3001/api/comments/<commentId>/reactions/<reactionId>
    Send: Click the "Send" button.

Delete a Comment

    Location: Insomnia
    Action: Duplicate "List Comments", rename to "Delete Comment", change method to DELETE, and adjust the URL.
    URL: http://localhost:3001/api/comments/<commentId>
    Send: Click the "Send" button.

Remove a Pal

    Location: Insomnia
    Action: Duplicate "Add Pal", rename to "Remove Pal", change method to DELETE, and adjust the URL.
    URL: http://localhost:3001/api/users/<userId>/pals/<palId>
    Send: Click the "Send" button.

Delete a User

    Location: Insomnia
    Action: Duplicate "List Users", rename to "Delete User", change method to DELETE, and adjust the URL.
    URL: http://localhost:3001/api/users/<userId>
    Send: Click the "Send" button.
