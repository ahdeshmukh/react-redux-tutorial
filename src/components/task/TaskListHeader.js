import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { user: state.userReducer.user };
};

const ConnectedTaskListHeader = ({ user }) => {
    let todosListHeader = 'Todos';
    if(user && user.name) {
        todosListHeader += ' for ' + user.name;
    }
    return (<h2>{todosListHeader}</h2>);
}



const TaskListHeader = connect(mapStateToProps)(ConnectedTaskListHeader);
export default TaskListHeader;