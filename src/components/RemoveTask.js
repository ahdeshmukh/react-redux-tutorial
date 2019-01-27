import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTask } from "../actions/task";

const mapDispatchToProps = (dispatch) => {
    return {
        removeTask: taskId => dispatch(removeTask(taskId))
    }
}

class RemoveTaskConnected extends Component {
    constructor(props) {
        super(props);
        this.removeTask = this.removeTask.bind(this);
    }

    removeTask() {
        //this.props.dispatch(removeArticle(this.props.taskId));
        this.props.removeTask(this.props.taskId);
    }

    render() {
        return (
            <button className="btn btn-danger" onClick={this.removeTask}>Remove</button>
        );
    }
}

const RemoveTask = connect(null, mapDispatchToProps)(RemoveTaskConnected);
export default RemoveTask;