/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import { addTask, getTasks } from './services/api';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskToAPI = async (description) => {
    await addTask(description);
    const dataTasks = await getTasks();

    setTasks(dataTasks);
  };

  useEffect(() => {
    async function handleTasksOnLoad() {
      if (tasks.length === 0) {
        const dataTasks = await getTasks();

        setTasks(dataTasks);
      }
    }

    handleTasksOnLoad();
  }, []);

  return (
    <div className="App">
      <Header addTask={addTaskToAPI} />
      <Table tasks={tasks} />
    </div>
  );
}

export default App;
