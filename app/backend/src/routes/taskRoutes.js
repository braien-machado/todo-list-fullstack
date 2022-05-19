const express = require('express');
const {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} = require('../controllers/taskController');
const validateId = require('../middlewares/idValidation');

const router = express.Router();

router.delete('/:id', validateId, deleteTask);
router.get('/', getAllTasks);
router.post('/', createTask);
router.put('/:id', validateId, updateTask);

module.exports = router;
