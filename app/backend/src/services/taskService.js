const { Task } = require('../database/models');

const getAllTasks = async () => {
  const tasks = await Task.findAll();

  return tasks;
};

const deleteTask = async (id) => {
  await Task.destroy({ where: { id } });
};

const updateTask = async (infoToUpdate, id, transaction) => {
  await Task.update(infoToUpdate, {
    where: { id },
  }, { transaction });
};

const getTaskById = async (id, transaction) => {
  const task = await Task.findOne(
    {
      where: { id },
    },
    { transaction },
  );

  return task;
};

const createTask = async (newTask) => {
  const createdTask = await Task.create(newTask);

  return createdTask;
};

module.exports = {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
};
