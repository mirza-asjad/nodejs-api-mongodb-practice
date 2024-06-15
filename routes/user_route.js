const express = require('express');
const router = express.Router();
const {
    handleCreateNewUser,
    handleDeleteUsers,
    handleGetAllUsers,
    handleGetUserbyID,
    handleUpdateUsers
} = require('../controllers/user_controller');

// Routes for user operations
router.route('/:id')
    .get(handleGetUserbyID)
    .patch(handleUpdateUsers)
    .delete(handleDeleteUsers);

router.route('/')
    .post(handleCreateNewUser)
    .get(handleGetAllUsers);

module.exports = router;
