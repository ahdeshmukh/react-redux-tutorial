import React, { Component } from "react";
import { ValidatorForm } from 'react-form-validator-core';
import Button from "./Button";
import TextBox from "./TextBox";
import InputTextValidator from "../components/formValidators/InputTextValidator";
import { connect } from "react-redux";
import { addSessionUser } from "../actions/user";

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
                    {/* <TextBox id="userName" value={this.state.userName} onChange={this.handleChange} label="Add your name"/> */}
                    <InputTextValidator id="userName"
                onChange={this.handleChange}
                value={this.state.userName}
                validators={['required']}
                errorMessages={['This field is required']} 
            />
                    {/* <input type="text" className="form-control" id="userName" value={this.state.userName} onChange={this.handleChange} /> */}
                    {/* <Button btnClass="btn-success" btnTxt="Submit" onClick={this.handleSubmit} /> */}
                    {/* <input type="submit" value="Submit"></input> */}
                    <Button type="submit" btnClass="btn-success" btnTxt="Submit" onClick={this.handleSubmit} />
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