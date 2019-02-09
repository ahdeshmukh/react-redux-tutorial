import React, { Component } from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { addSessionUser } from "../actions/user";

function mapDispatchToProps(dispatch) {
    return {
      addSessionUser: user => dispatch(addSessionUser(user))
    };
  }

class UserConnected extends Component {
    constructor() {
        super();
        this.state = {
            userName: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="userName">Add your name</label>
                    <input type="text" className="form-control" id="userName" value={this.state.userName} onChange={this.handleChange} />
                    <Button btnClass="btn-success" btnTxt="Submit" onClick={this.handleSubmit} />
                </div>
            </form>
        );
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit() {
        this.props.addSessionUser({"name":this.state.userName});
        this.setState({ userName: "" });
    }
}

const User = connect(null, mapDispatchToProps)(UserConnected);
export default User;