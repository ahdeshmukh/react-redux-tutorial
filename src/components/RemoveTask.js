import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTask } from "../actions";

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
            <button onClick={this.removeTask}>X</button>
        );
    }
}

const RemoveTask = connect(null, mapDispatchToProps)(RemoveTaskConnected);
export default RemoveTask;