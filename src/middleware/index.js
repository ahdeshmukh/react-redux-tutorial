import { REMOVE_ALL_TASKS, CLEAR_STATE, REMOVE_SESSION_USER } from "../constants/action-types"

export const clearStateMiddleware = ({dispatch}) => {
    return function(next) {
        return function(action) {
            if (action.type === CLEAR_STATE) {
                const actions = [REMOVE_ALL_TASKS, REMOVE_SESSION_USER];
                //return dispatch({ type: REMOVE_ALL_TASKS });
                actions.map(action => {
                    return dispatch({type: action});
                })
            }
            return next(action);
        };
    };
}