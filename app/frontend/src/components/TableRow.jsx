import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TableRow(props) {
  const {
    task: {
      createdAt,
      status,
      task,
    },
  } = props;

  const [taskValue, setTaskValue] = useState(task);
  const [statusValue, setStatusValue] = useState(status);
  const [editMode, setEditMode] = useState(false);

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
        <button type="button" onClick={() => setEditMode(!editMode)}>
          { editMode ? 'Confirmar' : 'Editar' }
        </button>
        <button type="button">Excluir</button>
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
};
