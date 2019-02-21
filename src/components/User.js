import React, { Component } from "react";
import { ValidatorForm } from 'react-form-validator-core';
import Button from "./Button";
import InputTextValidator from "../components/formValidators/InputTextValidator";
import { connect } from "react-redux";
import { addSessionUser } from "../actions/user";
import { REQUIRED, REQUIRED_ERROR } from "../constants/form-validators";

const mapStateToProps = state => {
    return { user: state.userReducer.user };
}

const mapDispatchToProps = (dispatch) => {
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
        if(this.props.user && this.props.user.name) {
            return (<h1>Hello {this.props.user.name}</h1>);
        }
        return (
            <ValidatorForm ref="form" onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <InputTextValidator 
                        id="userName"
                        onChange={this.handleChange}
                        value={this.state.userName}
                        validators={[REQUIRED]}
                        errorMessages={[REQUIRED_ERROR]} 
                        labelText="Enter your name"
                    />
                    <Button type="submit" btnClass="btn-success" btnTxt="Submit" />
                </div>
            </ValidatorForm>
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

const User = connect(mapStateToProps, mapDispatchToProps)(UserConnected);
export default User;