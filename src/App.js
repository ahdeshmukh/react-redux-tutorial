import React from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import TaskCount from './components/TaskCount';

const App = () => (
  <div className="row mt-5">
    <TaskCount />
    <div className="col-md-4 offset-md-1">
      <h2>Todos</h2>
      <TaskList />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new task</h2>
      <AddTaskForm />
    </div>
  </div>
);

export default App;
