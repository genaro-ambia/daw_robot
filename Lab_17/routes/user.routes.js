const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/logout', userController.logout);

module.exports = router;