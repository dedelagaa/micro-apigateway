const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const mentorsHandler = require('./handler/mentors');

router.get('/', mentorsHandler.getAll);
router.get('/:id', mentorsHandler.get);
router.post('/', mentorsHandler.create);
router.put('/:id', mentorsHandler.update);
router.delete('/:id', mentorsHandler.destroy);

module.exports = router;
