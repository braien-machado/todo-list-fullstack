/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import { addTask, getTasks } from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasksFromApi = async () => {
    const dataTasks = await getTasks();

    setTasks(dataTasks);
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
      <Header addTask={addTaskToAPI} />
      <Table tasks={tasks} loadTasks={getTasksFromApi} />
    </div>
  );
}

export default App;
