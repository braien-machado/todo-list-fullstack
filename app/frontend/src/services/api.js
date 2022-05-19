const axios = require('axios');

const getTasks = async () => {
  const tasks = await axios.get('http://localhost:3001/task')
    .then((response) => response.data);

  return tasks;
};

const addTask = async (description) => {
  await axios.post('http://localhost:3001/task', {
    task: description,
    status: 'pendente',
  });
};

const updateTask = async (task, id) => {
  await axios.put(`http://localhost:3001/task/${id}`, task);
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
};
