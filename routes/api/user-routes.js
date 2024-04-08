const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addPal, // Changed from addFriend to addPal
    deletePal // Changed from deleteFriend to deletePal
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router.route('/')
    .get(getAllUser)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// Changed the path to match 'pals' terminology
router.route('/:userId/pals/:palId')
    .post(addPal) // Changed to addPal
    .delete(deletePal); // Changed to deletePal

module.exports = router;
