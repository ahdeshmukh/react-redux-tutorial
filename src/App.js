import React from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import TaskCount from './components/TaskCount';
import ClearState from './components/ClearState';

const App = () => (
  <div className="container">
    <div className="row mt-5"><TaskCount /></div>
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
    <ClearState />
  </div>
);

export default App;
