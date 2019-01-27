import { ADD_TASK, REMOVE_TASK } from "../constants/action-types";

export function addTask(task) {
    return { type: ADD_TASK, task }
};

export function removeTask(taskId) {
    return { type: REMOVE_TASK, taskId }
};