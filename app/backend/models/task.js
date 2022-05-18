const Task = (sequelize, DataTypes) => {
  const task = sequelize.define('Task', {
    task: DataTypes.STRING,
    status: DataTypes.STRING,
  });

  return task;
};

export default Task;
