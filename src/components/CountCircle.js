import React from "react";

const CountCircle = ({ count, style, text }) => (
    <div>
        <div style={style} className="circle-task-count">{count}</div>
        <div className="text-center count-circle-helper-text">{text}</div>
    </div>
);

export default CountCircle;