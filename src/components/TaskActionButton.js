import React, { Component } from "react";
//import { connect } from "react-redux";
//import { removeTask, completeTask } from "../actions/task";

class TaskActionButton extends Component {
    constructor(props) {
        super(props);
        this.taskButtonClick = this.taskButtonClick.bind(this);
        //this.removeTask = this.removeTask.bind(this);
        //this.completeTask = this.completeTask.bind(this);
    }

    /*removeTask() {
        //this.props.dispatch(removeArticle(this.props.taskId));
        this.props.removeTask(this.props.task.id);
    }

    completeTask() {
        this.props.completeTask(this.props.task.id);
    }*/

    taskButtonClick() {
        this.props.onClick(this.props.task);
    }

    render() {
        return (
            <button disabled={this.props.disabled} className={"btn task-action-btn " + this.props.btnClass} onClick={this.taskButtonClick}>{this.props.btnTxt}</button>
        );
    }
}

export default TaskActionButton;