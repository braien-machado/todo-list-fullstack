/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { getTasks } from '../services/api';
import TableRow from './TableRow';

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
        {tasks.map((task) => (
          <TableRow task={task} key={`${task.task}-${task.createdAt}`} />
        ))}
      </tbody>
    </table>
  );
}
