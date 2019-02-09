import React from 'react';
import TaskList from './components/task/TaskList';
import AddTaskForm from './components/task/AddTaskForm';
import TaskCount from './components/task/TaskCount';
import ClearState from './components/ClearState';
import User from './components/User';

import './App.css';

const App = () => (
  <div className="container">
    <div className="row mt-5">
      <User />
    </div>
    <div className="row mt-5">
      <TaskCount />
      <div className="col-md-4">
        <div className="float-right"><ClearState /></div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-4">
        <h2>Add a new task</h2>
        <AddTaskForm />
      </div>
      <div className="col-md-8">
        <h2>Todos</h2>
        <TaskList />
      </div>
    </div>
  </div>
);

export default App;
