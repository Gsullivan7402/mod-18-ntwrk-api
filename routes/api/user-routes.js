const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addPal, // 
    deletePal 
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

router.route('/:userId/pals/:palId')
    .post(addPal) 
    .delete(deletePal); 

module.exports = router;
