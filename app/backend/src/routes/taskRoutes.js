const express = require('express');
const {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} = require('../controllers/taskController');
const validateId = require('../middlewares/idValidation');
const validateStatus = require('../middlewares/statusValidation');

const router = express.Router();

router.delete('/:id', validateId, deleteTask);
router.get('/', getAllTasks);
router.post('/', validateStatus, createTask);
router.put('/:id', validateId, validateStatus, updateTask);

module.exports = router;
