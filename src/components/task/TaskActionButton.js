import React, { Component } from "react";
import Button from '../Button';

class TaskActionButton extends Component {
    render() {
        return (
            <Button btnTxt={this.props.btnTxt} btnClass={this.props.btnClass} disabled={this.props.disabled} onClick={this.props.onClick} />
        )    
    }
}

export default TaskActionButton;