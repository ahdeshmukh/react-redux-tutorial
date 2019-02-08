import React, { Component } from "react";
import { removeTask, completeTask } from "../../actions/task";
import { connect } from "react-redux";
import Button from '../Button';

const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: taskId => dispatch(removeTask(taskId)),
        completeTask: taskId => dispatch(completeTask(taskId))
    }
}

class TaskActionButtonConnected extends Component {
    constructor(props) {
        super(props);
        this.removeTask = this.removeTask.bind(this);
        this.completeTask = this.completeTask.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    
    render() {
        return (
            <Button btnTxt={this.props.btnTxt} btnClass={this.props.btnClass} disabled={this.props.disabled} onClick={this.handleBtnClick} />
        )    
    }

    handleBtnClick() {
        if(this.props.action === 'completeTask') {
            this.completeTask();
        } else if(this.props.action === 'removeTask') {
            this.removeTask();
        }
    }

    removeTask() {
        //this.props.dispatch(removeArticle(this.props.taskId));
        this.props.removeTask(this.props.task.id);
    }

    completeTask() {
        this.props.completeTask(this.props.task.id);
    }
}

const TaskActionButton = connect(null, mapDispatchToProps)(TaskActionButtonConnected);
export default TaskActionButton;