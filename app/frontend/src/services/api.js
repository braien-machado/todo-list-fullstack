const axios = require('axios');

const getTasks = async () => {
  const tasks = await axios.get('http://localhost:3001/task')
    .then((response) => response.data);

  return tasks;
};

const addTask = async (description) => {
  const result = await axios.post('http://localhost:3001/task', {
    task: description,
    status: 'pendente',
  });

  return result;
};

module.exports = {
  getTasks,
  addTask,
};
