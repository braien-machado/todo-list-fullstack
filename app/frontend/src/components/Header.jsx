import React, { useState } from 'react';

export default function Header() {
  const [newTask, setNewTask] = useState('');

  return (
    <div>
      <h1>To Do List</h1>
      <label htmlFor="description">
        Nova Tarefa:
        <input
          type="text"
          value={newTask}
          onChange={({ target: { value } }) => setNewTask(value)}
        />
      </label>
      <button type="button">Adicionar</button>
    </div>
  );
}
