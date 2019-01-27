import React from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import TaskCount from './components/TaskCount';

const App = () => (
  <div className="row mt-2">
    <div className="pull-right"><TaskCount /></div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new task</h2>
      <AddTaskForm />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Todos</h2>
      <TaskList />
    </div>
  </div>
);

export default App;
