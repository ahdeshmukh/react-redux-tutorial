import React, { Component } from "react";
import Button from '../Button';

class TaskActionButton extends Component {
    constructor(props) {
        super(props);
        this.taskButtonClick = this.taskButtonClick.bind(this);
    }

    taskButtonClick() {
        this.props.onClick(this.props.task);
    }

    render() {
        return (
            <Button btnTxt={this.props.btnTxt} btnClass={this.props.btnClass} disabled={this.props.disabled} onClick={this.props.onClick} />
        )    
    }
}

export default TaskActionButton;