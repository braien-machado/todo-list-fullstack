const { sequelize } = require('../database/models');
const TaskService = require('../services/taskService');

const createTask = async (req, res) => {
  const { task, status } = req.body;

  const createdTask = await TaskService.createTask({ task, status });

  res.status(201).json(createdTask);
};

const getAllTasks = async (_req, res) => {
  const tasks = await TaskService.getAllTasks();

  res.status(200).json(tasks);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await TaskService.deleteTask(id);

  res.status(204).send();
};

const updateTask = async (req, res) => {
  const { task, status } = req.body;
  const { id } = req.params;

  const updatedTask = await sequelize.transaction(async (t) => {
    await TaskService.updateTask({ task, status }, id, t);
    return TaskService.getTaskById(id, t);
  });

  res.status(200).json(updatedTask);
};

module.exports = {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
};
