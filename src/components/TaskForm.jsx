
import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask, onCancel }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask({ title, status });
      setTitle('');
      setStatus('To Do');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="To Do">To Do</option>
        <option value="Done">Done</option>
      </select>
      <div className="task-form-buttons">
        <button type="submit">Add Task</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default TaskForm;
