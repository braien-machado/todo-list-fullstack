import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  const { addTask } = props;
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
      <button
        disabled={newTask.length === 0}
        onClick={() => addTask(newTask)}
        type="button"
      >
        Adicionar
      </button>
    </div>
  );
}

Header.propTypes = {
  addTask: PropTypes.func.isRequired,
};
