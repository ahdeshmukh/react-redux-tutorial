import { REMOVE_ALL_TASKS, CLEAR_STATE } from "../constants/action-types"

export const clearStateMiddleware = ({dispatch}) => {
    return function(next) {
        return function(action) {
            if (action.type === CLEAR_STATE) {
                return dispatch({ type: REMOVE_ALL_TASKS });
            }
            return next(action);
        };
    };
}