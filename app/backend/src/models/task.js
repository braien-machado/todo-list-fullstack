const Task = (sequelize, DataTypes) => {
  const task = sequelize.define('Task', {
    task: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {
    tableName: 'Tasks',
    underscored: true,
    updatedAt: false,
  });

  return task;
};

module.exports = Task;
