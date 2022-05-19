/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import { addTask } from './services/api';

function App() {
  const addTaskToAPI = async (description) => {
    await addTask(description);
  };

  return (
    <div className="App">
      <Header addTask={addTaskToAPI} />
      <Table />
    </div>
  );
}

export default App;
