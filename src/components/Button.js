import React, { Component } from "react";
import ReactSpinner from './ReactSpinner';

class Button extends Component {
    _isMounted = false;
    
    constructor(props) {
        super(props);
        this.state = {"inProgess": false};
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick() {
        //setTimeout(this.props.onClick(this.props.task), 3000);
        this.setState({"inProgess": true});
        setTimeout(
            function() {
                if(this.props.onClick) {
                    this.props.onClick();
                }
                if(this._isMounted) {
                    this.setState({"inProgess": false});
                }
            }
            .bind(this),
            2000
        );
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
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
                onClick={this.buttonClick}>{btnValue}</button>
        );
    }
}

export default Button;