
import React from 'react';
import Navbar from './components/Navbar';
import TaskManager from './components/TaskManager';
import TodayTasks from './components/TodayTasks';
import './App.css';

const App = () => {
  
  const initialTodayTasks = [
    { id: 1, title: 'Today Task 1', progress: 50 },
    { id: 2, title: 'Today Task 2', progress: 80 },
  ];

  return (
    <div className="app">
      <Navbar />
      <div className="tasks-wrapper">
        <TaskManager />
        <TodayTasks todayTasks={initialTodayTasks} />
      </div>
    </div>
  );
};

export default App;
