import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addTask } from "../actions/task";
import Button from "./Button";

function mapDispatchToProps(dispatch) {
  return {
    addTask: task => dispatch(addTask(task))
  };
}

class AddTaskConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit() {
        //event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addTask({ title, id, "new": true });
        //this.props.dispatch(addTask({ title, id })); //this works too, since dispatch is a prop. if you choose to use this remove mapDispatchToProps
        this.setState({ title: "" });
    }
    
    render() {
        const { title } = this.state;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={this.handleChange} />
                </div>
                <Button btnClass="btn-success btn-lg" btnTxt="SAVE" onClick={this.handleSubmit} />
            </form>
        );
    }

}

const AddTaskForm = connect(null, mapDispatchToProps)(AddTaskConnectedForm);

export default AddTaskForm;