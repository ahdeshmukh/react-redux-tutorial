import { REMOVE_ALL_TASKS, CLEAR_STATE } from "../constants/action-types"

export const clearStateMiddleware = ({dispatch}) => {
    /*return function(next) {
        return function(action) {
            if (action.type === CLEAR_STATE) {
                return dispatch({ type: REMOVE_ALL_TASKS });
            }
            return next(action);
        };
    };*/

    return (next) => {
        return (action) => {
            if (action.type === CLEAR_STATE) {
                /*return new Promise().then(() => {
                    dispatch({ type: REMOVE_ALL_TASKS });
                });*/
                return new Promise((resolve) => {
                    resolve(dispatch({ type: REMOVE_ALL_TASKS }));
                });
                //return dispatch({ type: REMOVE_ALL_TASKS });
            }
            return next(action);
        };
    };
}