const express = require('express');
const router = express.Router();

const { APP_NAME } = process.env;
const verifyToken = require('../middlewares/verifyToken');
const coursesHandler = require('./handler/courses');
const can = require('../middlewares/permission');

router.get('/', coursesHandler.getAll);
router.get('/:id', coursesHandler.get);

router.post('/', verifyToken, can('admin'), coursesHandler.create);
router.put('/:id', verifyToken, can('admin', 'guest'), coursesHandler.update);
router.delete('/:id', verifyToken, can('admin'), coursesHandler.destroy);

module.exports = router;
