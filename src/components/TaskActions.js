import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTask, completeTask } from "../actions/task";
import TaskActionButton from "./TaskActionButton";

const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: taskId => dispatch(removeTask(taskId)),
        completeTask: taskId => dispatch(completeTask(taskId))
    }
}

class TaskActionsConnected extends Component {
    constructor(props) {
        super(props);
        this.removeTask = this.removeTask.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }

    removeTask(task) {
        //this.props.dispatch(removeArticle(this.props.taskId));
        this.props.removeTask(task.id);
    }

    completeTask(task) {
        this.props.completeTask(task.id);
    }

    /*render() {
        return (
            <div>
                <button disabled={this.props.task.completed} className="btn btn-warning task-action-btn" onClick={this.completeTask}>Complete</button>
                <button className="btn btn-danger task-action-btn" onClick={this.removeTask}>Remove</button>
            </div>
        );
    }*/

    render() {
        return (
            <div>
                <TaskActionButton task={this.props.task} btnClass="btn-warning" btnTxt="Complete" onClick={this.completeTask} disabled={this.props.task.completed}/>
                <TaskActionButton task={this.props.task} btnClass="btn-danger" btnTxt="Remove" onClick={this.removeTask} />
            </div>
        );
    }
}

const TaskActions = connect(null, mapDispatchToProps)(TaskActionsConnected);
export default TaskActions;