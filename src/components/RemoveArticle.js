import React, { Component } from "react";
import { connect } from "react-redux";
import { removeArticle } from "../actions";

const mapDispatchToProps = (dispatch) => {
    return {
        removeArticle: articleId => dispatch(removeArticle(articleId))
    }
}

class RemoveArticleConnected extends Component {
    constructor(props) {
        super(props);
        this.removeArticle = this.removeArticle.bind(this);
    }

    removeArticle() {
        //this.props.dispatch(removeArticle(this.props.articleId));
        this.props.removeArticle(this.props.articleId);
    }

    render() {
        return (
            <button onClick={this.removeArticle}>X</button>
        );
    }
}

const RemoveArticle = connect(null, mapDispatchToProps)(RemoveArticleConnected);
export default RemoveArticle;