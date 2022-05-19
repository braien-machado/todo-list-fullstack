const getTasks = async () => {
  const tasks = await fetch('http://localhost:3001/task')
    .then((response) => response.json());

  return tasks;
};

module.exports = {
  getTasks,
};
