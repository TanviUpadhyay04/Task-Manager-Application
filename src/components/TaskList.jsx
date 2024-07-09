
import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onStatusChange, onDelete, onShowForm }) => {
  return (
    <div className="task-list">
      <h2>My Tasks</h2>
      <button className="add-task-btn" onClick={onShowForm}>+</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <select
              value={task.status}
              onChange={(e) => onStatusChange(task.id, e.target.value)}
            >
              <option value="To Do">To Do</option>
              <option value="Done">Done</option>
            </select>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
