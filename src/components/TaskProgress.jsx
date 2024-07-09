
import React from 'react';
import './TaskProgress.css';

const TaskProgress = ({ title, progress }) => {
  return (
    <div className="task-progress">
      <h3>{title}</h3>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TaskProgress;
