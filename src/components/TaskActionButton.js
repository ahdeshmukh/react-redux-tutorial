import React, { Component } from "react";
//import { connect } from "react-redux";
//import { removeTask, completeTask } from "../actions/task";

class TaskActionButton extends Component {
    constructor(props) {
        super(props);
        this.taskButtonClick = this.taskButtonClick.bind(this);
    }

    taskButtonClick() {
        //setTimeout(this.props.onClick(this.props.task), 3000);
        setTimeout(
            function() {
                this.props.onClick(this.props.task);
            }
            .bind(this),
            3000
        );
    }

    render() {
        return (
            <button disabled={this.props.disabled} className={"btn task-action-btn " + this.props.btnClass} onClick={this.taskButtonClick}>{this.props.btnTxt}</button>
        );
    }
}

export default TaskActionButton;