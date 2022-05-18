const TaskService = require('../services/taskService');

const getAllTasks = async (_req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();

    return res.status(200).json(tasks);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {
  getAllTasks,
};
