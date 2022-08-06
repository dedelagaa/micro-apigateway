const express = require('express');
const router = express.Router();

const { APP_NAME } = process.env;
const verifyToken = require('../middlewares/verifyToken');
const reviewsHandler = require('./handler/reviews');

// router.get('/', lessonsHandler.getAll);
// router.get('/:id', lessonsHandler.get);
router.post('/', reviewsHandler.create);
router.put('/:id', reviewsHandler.update);
router.delete('/:id', reviewsHandler.destroy);

module.exports = router;
