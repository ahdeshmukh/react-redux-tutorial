import { ADD_TASK, REMOVE_TASK, REMOVE_ALL_TASKS } from "../constants/action-types";

export function addTask(task) {
    return { type: ADD_TASK, task };
};

export function removeTask(taskId) {
    return { type: REMOVE_TASK, taskId };
};

export function removeAllTasks() {
    return { type: REMOVE_ALL_TASKS };
}