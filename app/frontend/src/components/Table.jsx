/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function handleTasksOnLoad() {
      if (tasks.length === 0) {
        const dataTasks = await getTasks();

        setTasks(dataTasks);
      }
    }

    handleTasksOnLoad();
  }, []);

  const generateTableRow = (task) => {
    const {
      // id,
      // status,
      task: description,
      createdAt,
    } = task;

    return (
      <tr key={`${description}-${createdAt}`}>
        <td>{description}</td>
        <td>{createdAt}</td>
        <td>
          <select name="status" id="status">
            <option value="pendente">pendente</option>
            <option value="em andamento">em andamento</option>
            <option value="pronto">pronto</option>
          </select>
        </td>
        <td>
          <button type="button">Editar</button>
          <button type="button">Excluir</button>
        </td>
      </tr>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Tarefa</th>
          <th>Data de criação</th>
          <th>Status</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => generateTableRow(task))}
      </tbody>
    </table>
  );
}
