// this helped - https://stackoverflow.com/questions/35402389/combinereducers-causes-code-to-break

import { combineReducers } from 'redux';
import { taskReducer } from './task';

const rootReducer = combineReducers({
    taskReducer
});

export default rootReducer;