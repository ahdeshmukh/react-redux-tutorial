import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTask, completeTask } from "../actions/task";

const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: taskId => dispatch(removeTask(taskId)),
        completeTask: taskId => dispatch(completeTask(taskId))
    }
}

class RemoveTaskConnected extends Component {
    constructor(props) {
        super(props);
        this.removeTask = this.removeTask.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }

    removeTask() {
        //this.props.dispatch(removeArticle(this.props.taskId));
        this.props.removeTask(this.props.taskId);
    }

    completeTask() {
        this.props.completeTask(this.props.taskId);
    }

    render() {
        return (
            <div>
                <button className="btn btn-success task-action-btn" onClick={this.completeTask}>Complete</button>
                <button className="btn btn-danger task-action-btn" onClick={this.removeTask}>Remove</button>
            </div>
        );
    }
}

const RemoveTask = connect(null, mapDispatchToProps)(RemoveTaskConnected);
export default RemoveTask;