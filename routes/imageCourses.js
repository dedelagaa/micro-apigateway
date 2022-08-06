const express = require('express');
const router = express.Router();

const { APP_NAME } = process.env;
const verifyToken = require('../middlewares/verifyToken');
const imageCoursesHandler = require('./handler/image-courses');

// router.get('/', lessonsHandler.getAll);
// router.get('/:id', lessonsHandler.get);
router.post('/', imageCoursesHandler.create);
// router.put('/:id', lessonsHandler.update);
router.delete('/:id', imageCoursesHandler.destroy);

module.exports = router;
