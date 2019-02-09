import { ADD_SESSION_USER } from "../constants/action-types";
import initialState from "./initial-state"

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SESSION_USER:
            return Object.assign({}, state, {user: action.user});
            //return {...state, user: action.user};
            //return state;
        default:
            return initialState;
    }
}
