import React from "react";
import { connect } from "react-redux";
import CountCircle from "../CountCircle";

const mapStateToProps = state => {
  let newTasks = [];
  let completedTasks = [];
  state.taskReducer.tasks.forEach(task => {
    if(task.new) {
      newTasks.push(task);
    }
    if(task.completed) {
      completedTasks.push(task);
    }
  });
  return { newTasks, completedTasks };
};

const ConnectedTaskCount = ({ newTasks, completedTasks }) => (
  <React.Fragment>
    <div className="col-md-4">
      <CountCircle count={newTasks.length} style={{"background":"#dc3545"}} text="NEW" />
    </div>
    <div className="col-md-4">
    <CountCircle count={completedTasks.length} style={{"background":"#ffc107"}} text="COMPLETED" />
    </div>
  </React.Fragment>
);

const TaskCount = connect(mapStateToProps)(ConnectedTaskCount);

export default TaskCount;