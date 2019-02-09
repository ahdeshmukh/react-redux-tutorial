import { 
    ADD_TASK,
    REMOVE_TASK,
    REMOVE_ALL_TASKS,
    COMPLETE_TASK 
} from "../constants/action-types";

const initialState = {"tasks": []};

export const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            return Object.assign({}, state, {tasks: state.tasks.concat(action.task)});
            // to concat at top of the list, use below
            //return Object.assign({}, state, {tasks: [action.task].concat(state.tasks)});
        case REMOVE_TASK:
            //https://stackoverflow.com/questions/15287865/remove-array-element-based-on-object-property    
            return Object.assign({}, state, {tasks: state.tasks.filter((task) => {return task.id !== action.taskId})});
        case REMOVE_ALL_TASKS:
            return Object.assign({}, state, {tasks: []});
        case COMPLETE_TASK:
            return { 
                ...state, 
                tasks: state.tasks.map(
                    (task) => task.id === action.taskId ? {...task, new: false, completed: true} : task
                )
            }
        default:
            return state;
    }
}
