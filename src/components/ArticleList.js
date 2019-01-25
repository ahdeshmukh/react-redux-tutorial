import React from "react";
import { connect } from "react-redux";
import RemoveArticle from "./RemoveArticle";

const mapStateToProps = state => {
  return { articles: state.articleReducer.articles };
};

const ConnectedArticleList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
        <RemoveArticle articleId={el.id} />
      </li>
    ))}
  </ul>
);

const ArticleList = connect(mapStateToProps)(ConnectedArticleList);

export default ArticleList;