
const router = require("express").Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require("../../controllers/userController");

// Set up GET all and POST at /api/users
// /api/users
router
    .route("/")
    .get(getUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
// /api/users/:id
router
    .route("/:id")
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

router
    .route("/:userId/friends/:friendId")
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;