import React, { Component } from "react";
import Button from './Button';
//import ReactSpinner from './ReactSpinner';
//import { connect } from "react-redux";
//import { removeTask, completeTask } from "../actions/task";

class TaskActionButton extends Component {
    //_isMounted = false;
    
    constructor(props) {
        super(props);
        //this.state = {"inProgess": false};
        this.taskButtonClick = this.taskButtonClick.bind(this);
    }

    taskButtonClick() {
        this.props.onClick(this.props.task);
        //setTimeout(this.props.onClick(this.props.task), 3000);
        /*this.setState({"inProgess": true});
        setTimeout(
            function() {
                this.props.onClick(this.props.task);
                if(this._isMounted) {
                    this.setState({"inProgess": false});
                }
            }
            .bind(this),
            3000
        );*/
    }

    /*componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }*/

    render() {
        /*let btnValue = this.props.btnTxt;
        if(this.state.inProgess) {
           btnValue = <ReactSpinner loading={this.state.inProgess} />
        }
        return (
            <button 
                disabled={this.props.disabled || this.state.inProgess} 
                className={"btn task-action-btn " + this.props.btnClass} 
                onClick={this.taskButtonClick}>{btnValue}</button>
        );*/

        return (
            <Button btnTxt={this.props.btnTxt} btnClass={this.props.btnClass} disabled={this.props.disabled} onClick={this.props.onClick} />
        )    
    }
}

export default TaskActionButton;