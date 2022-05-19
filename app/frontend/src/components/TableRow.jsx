import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { deleteTask, updateTask } from '../services/api';

export default function TableRow(props) {
  const {
    task: {
      id,
      createdAt,
      status,
      task,
    },
    loadTasks,
  } = props;

  const [taskValue, setTaskValue] = useState(task);
  const [statusValue, setStatusValue] = useState(status);
  const [editMode, setEditMode] = useState(false);

  const isTaskChanged = () => (status !== statusValue || task !== taskValue);

  const handleEditButtonClick = async () => {
    if (editMode === true && isTaskChanged()) {
      await updateTask({ task: taskValue, status: statusValue }, id);
    }
    setEditMode(!editMode);
  };

  const handleDeleteButtonClick = async () => {
    await deleteTask(id);
    await loadTasks();
  };

  return (
    <tr>
      <td>
        {
          editMode ? (
            <input
              type="text"
              value={taskValue}
              onChange={({ target: { value } }) => setTaskValue(value)}
            />
          ) : (
            taskValue
          )
        }
      </td>
      <td>{createdAt}</td>
      <td>
        {
          editMode ? (
            <select
              name="status"
              defaultValue={statusValue}
              onChange={({ target: { value } }) => setStatusValue(value)}
              id="status"
            >
              <option value="pendente">pendente</option>
              <option value="em andamento">em andamento</option>
              <option value="pronto">pronto</option>
            </select>
          ) : (
            statusValue
          )
        }
      </td>
      <td>
        <button type="button" onClick={handleEditButtonClick}>
          { editMode ? 'Confirmar' : 'Editar' }
        </button>
        <button type="button" onClick={handleDeleteButtonClick}>Excluir</button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  task: PropTypes.shape({
    task: PropTypes.string,
    createdAt: PropTypes.string,
    id: PropTypes.number,
    status: PropTypes.string,
  }).isRequired,
  loadTasks: PropTypes.func.isRequired,
};
