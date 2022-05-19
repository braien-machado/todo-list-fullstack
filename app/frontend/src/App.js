/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import { addTask, getTasks } from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [sortMethod, setSortMethod] = useState('date');

  const sortMethods = {
    date: (array) => array.sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)),
    alphabetical: (array) => array.sort((a, b) => {
      if (a.task <= b.task) {
        return -1;
      }
      return 1;
    }),
    status: (array) => array.sort((a, b) => {
      if (a.status <= b.status) {
        return -1;
      }
      return 1;
    }),
  };

  const getTasksFromApi = async (method = 'date') => {
    const dataTasks = await getTasks();

    setTasks(sortMethods[method](dataTasks));
  };

  const changeOrder = async (method) => {
    setSortMethod(method);
    await getTasksFromApi(method);
  };

  const addTaskToAPI = async (description) => {
    await addTask(description);
    await getTasksFromApi();
  };

  useEffect(() => {
    async function handleTasksOnLoad() {
      if (tasks.length === 0) {
        await getTasksFromApi();
      }
    }

    handleTasksOnLoad();
  }, []);

  return (
    <div className="App">
      <Header addTask={addTaskToAPI} order={sortMethod} changeOrder={changeOrder} />
      <Table tasks={tasks} loadTasks={getTasksFromApi} />
    </div>
  );
}

export default App;
