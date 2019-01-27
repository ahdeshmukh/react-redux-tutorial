import React from "react";
import { connect } from "react-redux";
import RemoveTask from "./RemoveTask";

const mapStateToProps = state => {
  return { tasks: state.taskReducer.tasks };
};

const ConnectedTaskList = ({ tasks }) => (
  <ul className="list-group list-group-flush">
    {tasks.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
        <RemoveTask taskId={el.id} />
      </li>
    ))}
  </ul>
);

const TaskList = connect(mapStateToProps)(ConnectedTaskList);

export default TaskList;