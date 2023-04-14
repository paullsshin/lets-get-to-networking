const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addThought,
    viewFriends,
} = require ('../../controllers/userController');

router.route('/')(getUsers).post(createUser);

router.route('/')(getUsers).put(updateUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId/thoughts/friends').post(addThought, viewFriends);

router.route('/:userId/thoughts').delete(deleteUser);

module.exports = router;
