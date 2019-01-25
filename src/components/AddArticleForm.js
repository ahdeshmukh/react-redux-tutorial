import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticleForm: article => dispatch(addArticle(article))
  };
}

class AddArticleConnectedForm extends Component {
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

    handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticleForm({ title, id });
        //this.props.dispatch(addArticle({ title, id })); //this works too, since dispatch is a prop. if you choose to use this remove mapDispatchToProps
        this.setState({ title: "" });
    }
    
    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        );
    }

}

const AddArticleForm = connect(null, mapDispatchToProps)(AddArticleConnectedForm);

export default AddArticleForm;