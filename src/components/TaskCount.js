import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { tasks: state.taskReducer.tasks };
};

const ConnectedTaskCount = ({ tasks }) => (
  <div>Total Number of tasks: {tasks.length}</div>
);

const TaskCount = connect(mapStateToProps)(ConnectedTaskCount);

export default TaskCount;