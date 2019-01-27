import { ADD_TASK, REMOVE_TASK } from "../constants/action-types";
import initialState from "./initial-state"

export const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return Object.assign({}, state, {tasks: state.tasks.concat(action.task)});
        case REMOVE_TASK:
            //https://stackoverflow.com/questions/15287865/remove-array-element-based-on-object-property    
            return Object.assign({}, state, {tasks: state.tasks.filter((task) => {return task.id !== action.taskId})})
        default:
            return state;
    }
}
