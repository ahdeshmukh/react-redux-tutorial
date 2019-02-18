import { CLEAR_STATE } from "../constants/action-types"
import { removeSessionUser } from "../actions/user";
import { removeAllTasks } from "../actions/task";

export const clearStateMiddleware = ({dispatch}) => {
    return function(next) {
        return function(action) {
            if (action.type === CLEAR_STATE) {
                const actionCreators = [removeSessionUser, removeAllTasks];
                actionCreators.map(actionCreator => {
                    return dispatch(actionCreator());
                })
            }
            return next(action);
        };
    };
}