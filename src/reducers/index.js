// this helped - https://stackoverflow.com/questions/35402389/combinereducers-causes-code-to-break

import { combineReducers } from 'redux';
import { taskReducer } from './task';
import { clearStateReducer } from './clearstate';
import { userReducer } from './user';

const rootReducer = combineReducers({
    clearStateReducer,
    taskReducer,
    userReducer
});

export default rootReducer;