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

    removeTask() {
        //this.props.dispatch(removeArticle(this.props.taskId));
        this.props.removeTask(this.props.task.id);
    }

    completeTask() {
        this.props.completeTask(this.props.task.id);
    }

    render() {
        return (
            <div>
                <TaskActionButton task={this.props.task} btnClass="btn-warning" btnTxt="Completed" onClick={this.completeTask} disabled={this.props.task.completed}/>
                <TaskActionButton task={this.props.task} btnClass="btn-danger" btnTxt="Remove" onClick={this.removeTask} />
            </div>
        );
    }
}

const TaskActions = connect(null, mapDispatchToProps)(TaskActionsConnected);
export default TaskActions;