import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articleReducer.articles };
};

const ConnectedArticleCount = ({ articles }) => (
  <div>Total Number of articles: {articles.length}</div>
);

const ArticleCount = connect(mapStateToProps)(ConnectedArticleCount);

export default ArticleCount;