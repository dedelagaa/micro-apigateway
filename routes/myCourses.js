const express = require('express');
const router = express.Router();

const { APP_NAME } = process.env;
const verifyToken = require('../middlewares/verifyToken');
const myCoursesHandler = require('./handler/my-courses');

// router.get('/', lessonsHandler.getAll);
router.get('/', myCoursesHandler.get);
router.post('/', myCoursesHandler.create);
// router.put('/:id', lessonsHandler.update);
// router.delete('/:id', myCoursesHandler.destroy);

module.exports = router;
