import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  const { addTask, changeOrder, order } = props;
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
      <select
        id="order"
        name="order"
        value={order}
        onChange={({ target: { value } }) => changeOrder(value)}
      >
        <option value="date">Data de criação</option>
        <option value="alphabetical">Ordem alfabética</option>
        <option value="status">Por status</option>
      </select>
    </div>
  );
}

Header.propTypes = {
  addTask: PropTypes.func.isRequired,
  changeOrder: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
};
