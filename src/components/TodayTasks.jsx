
import React from 'react';
import './TodayTasks.css';

const TodayTasks = ({ todayTasks }) => {
  return (
    <div className="today-tasks">
      <h2>My Tasks for Today</h2>
      <div className="task-row">
        {todayTasks.map((task) => (
          <div key={task.id} className="task-box">
            <h3>{task.title}</h3>
            <div className="percentage">{task.progress}%</div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${task.progress}%` }}></div>
            </div>
            <div className="due-date">Due Date: {task.dueDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayTasks;
