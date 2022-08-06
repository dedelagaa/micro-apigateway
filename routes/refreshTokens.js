const express = require('express');
const router = express.Router();

const refreshTokensHandler = require('./handler/refresh-tokens');

router.post('/', refreshTokensHandler.refreshToken);
// router.post('/login', usersHandler.login);


module.exports = router;
