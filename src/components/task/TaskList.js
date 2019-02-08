import React from "react";
import { connect } from "react-redux";
import TaskActions from "./TaskActions";

const mapStateToProps = state => {
  return { tasks: state.taskReducer.tasks };
};

const ConnectedTaskList = ({ tasks }) => (
  <ul className="list-group list-group-flush">
    {tasks.map(task => (
      <li className="list-group-item" key={task.id}>
        <div className="float-left">{task.title}</div>
        <div className="float-right">
          <TaskActions task={task} />
        </div>
      </li>
    ))}
  </ul>
);

const TaskList = connect(mapStateToProps)(ConnectedTaskList);

export default TaskList;