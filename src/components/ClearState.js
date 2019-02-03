import React, { Component } from "react";
import Button from "./Button";
import { persistor } from "../store";
import { connect } from "react-redux";
import { clearState } from "../actions/clearstate";

const mapStateToProps = state => {
    return { tasks: state.taskReducer.tasks };
  };

class ClearStateConnected extends Component {
    constructor() {
        super();
        this.clearState = this.clearState.bind(this);
    }

    clearState() {
        this.props.dispatch(clearState());
        persistor.purge();
    }

    render() {
        return (
            <Button btnTxt="Clear State" btnClass="btn-danger btn-lg" disabled={!this.props.tasks.length} onClick={this.clearState} />
        );
    }
}

const ClearState = connect(mapStateToProps, null)(ClearStateConnected);
export default ClearState;