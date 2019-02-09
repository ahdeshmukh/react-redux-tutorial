import { ADD_SESSION_USER } from "../constants/action-types";

export function addSessionUser(user) {
    return { type: ADD_SESSION_USER, user };
};