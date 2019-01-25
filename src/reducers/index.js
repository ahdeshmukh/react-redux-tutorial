// this helped - https://stackoverflow.com/questions/35402389/combinereducers-causes-code-to-break

import { combineReducers } from 'redux';
import { articleReducer } from './article';

const rootReducer = combineReducers({
    articleReducer
});

export default rootReducer;