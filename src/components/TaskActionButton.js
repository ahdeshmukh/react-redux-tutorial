import React, { Component } from "react";
import ReactSpinner from './ReactSpinner';
//import { connect } from "react-redux";
//import { removeTask, completeTask } from "../actions/task";

class TaskActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {"inProgess": false};
        this.taskButtonClick = this.taskButtonClick.bind(this);
    }

    taskButtonClick() {
        //setTimeout(this.props.onClick(this.props.task), 3000);
        this.setState({"inProgess": true});
        setTimeout(
            function() {
                this.props.onClick(this.props.task);
                this.setState({"inProgess": false});
            }
            .bind(this),
            3000
        );
    }

    render() {
        let btnValue = this.props.btnTxt;
        if(this.state.inProgess) {
           btnValue = <ReactSpinner loading={this.state.inProgess} />
        }
        return (
            <button 
                disabled={this.props.disabled || this.state.inProgess} 
                className={"btn task-action-btn " + this.props.btnClass} 
                onClick={this.taskButtonClick}>{btnValue}</button>
        );
    }
}

export default TaskActionButton;