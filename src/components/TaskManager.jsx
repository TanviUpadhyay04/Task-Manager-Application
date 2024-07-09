
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskProgress from './TaskProgress';
import './TaskManager.css';

const TaskManager = () => {
  const initialTasks = [
    { id: 1, title: 'Task 1', status: 'To Do' },
    { id: 2, title: 'Task 2', status: 'Done' },
    { id: 3, title: 'Task 3', status: 'To Do' },
  ];

  const initialTodayTasks = [
    { id: 4, title: 'Today Task 1', progress: 50 },
    { id: 5, title: 'Today Task 2', progress: 80 },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [todayTasks, setTodayTasks] = useState(initialTodayTasks);
  const [showForm, setShowForm] = useState(false);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now() };
    setTasks([...tasks, newTask]);
    setShowForm(false);
  };

  const updateTaskStatus = (taskId, status) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="task-manager">
      <TaskList
        tasks={tasks}
        onStatusChange={updateTaskStatus}
        onDelete={deleteTask}
        onShowForm={() => setShowForm(true)}
      />
      {showForm && (
        <TaskForm
          onAddTask={addTask}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default TaskManager;
