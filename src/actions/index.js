import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types";

export function addArticle(article) {
    return { type: ADD_ARTICLE, article }
};

export function removeArticle(articleId) {
    return { type: REMOVE_ARTICLE, articleId }
};