const TaskModel = require('./Task.json');

const mockCreate = (data, Instance) => {
  if (!data) {
    return undefined;
  }

  const newData = data;
  newData.id = Instance[Instance.length - 1].id + 1;
  newData.createdAt = '2022-05-19T23:18:01.000Z';

  Instance.push(newData);

  return newData;
};

const Task = {
  create: async (data) => mockCreate(data, TaskModel),
  findAll: async () => TaskModel,
};

module.exports = {
  Task,
};
