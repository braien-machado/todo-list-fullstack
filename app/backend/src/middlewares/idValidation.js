const TaskService = require('../services/taskService');

const validateId = async (req, _res, next) => {
  const { id } = req.params;

  const task = await TaskService.getTaskById(id);

  if (!task) next({ code: 404, message: 'Task not found!' });

  next();
};

module.exports = validateId;
