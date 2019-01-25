import { ADD_ARTICLE } from "../constants/action-types";
import initialState from "../reducers/initial-state"

const addArticleReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.article)
            });
        default:
            return state;
    }
}

export default addArticleReducer;