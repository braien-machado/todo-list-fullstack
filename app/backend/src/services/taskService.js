const { Task } = require('../database/models');

const getAllTasks = async () => {
  const tasks = await Task.findAll();

  return tasks;
};

module.exports = {
  getAllTasks,
};
