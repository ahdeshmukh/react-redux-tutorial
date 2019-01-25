import { ADD_ARTICLE, REMOVE_ARTICLE } from "../constants/action-types";
import initialState from "../reducers/initial-state"

export const articleReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {articles: state.articles.concat(action.article)});
        case REMOVE_ARTICLE:
            //https://stackoverflow.com/questions/15287865/remove-array-element-based-on-object-property    
            return Object.assign({}, state, {articles: state.articles.filter((article) => {return article.id !== action.articleId})})
        default:
            return state;
    }
}
