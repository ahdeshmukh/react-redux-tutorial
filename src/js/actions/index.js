import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(article) {
    return { type: ADD_ARTICLE, article }
};