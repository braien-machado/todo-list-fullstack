/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

export default function Tasks(props) {
  const { tasks } = props;

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

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    task: PropTypes.string,
    createdAt: PropTypes.string,
    id: PropTypes.number,
    status: PropTypes.string,
  })).isRequired,
};
