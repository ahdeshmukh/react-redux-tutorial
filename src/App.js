import React from 'react';
import TaskList from './components/task/TaskList';
import TaskListHeader from './components/task/TaskListHeader';
import AddTaskForm from './components/task/AddTaskForm';
import TaskCount from './components/task/TaskCount';
import ClearState from './components/ClearState';
import User from './components/User';

import './App.css';

const App = () => (
  <div className="container">
    <div className="row mt-5">
      <div className="col-md-6 float-left"><User /></div>
      <div className="col-md-6">
        <div className="float-right"><ClearState /></div>
      </div>
    </div>
    <div className="row mt-5">
      <TaskCount />
    </div>
    <div className="row mt-5">
      <div className="col-md-4">
        <h2>Add a new task</h2>
        <AddTaskForm />
      </div>
      <div className="col-md-8">
        <TaskListHeader />
        <TaskList />
      </div>
    </div>
  </div>
);

export default App;
