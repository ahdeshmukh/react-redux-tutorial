// this helped - https://stackoverflow.com/questions/35402389/combinereducers-causes-code-to-break

import { combineReducers } from 'redux';
import { addArticleReducer } from './add-article';

const rootReducer = combineReducers({
    addArticleReducer
});

export default rootReducer;