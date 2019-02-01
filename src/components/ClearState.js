import React, { Component } from "react";
import { persistor } from "../store";
import { connect } from "react-redux";
import { clearState } from "../actions/clearstate";

/*const ClearState = () => (
    <button onClick={()=>{persistor.purge();}}>Clear State</button>
);*/

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
            <button className="btn btn-danger btn-lg" onClick={this.clearState}>Clear State</button>
        );
    }
}

const ClearState = connect(null, null)(ClearStateConnected);
export default ClearState;