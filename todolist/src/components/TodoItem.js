import React from "react";

const TodoItem = ({ todo }) => {
  // console.log(todo);

  return (
    <div className="todoItem">
      {todo.map((it) => {
        console.log(it);
      })}
      <div className="checkbox">
        <input type="checkbox" />
      </div>
      <div className="content"></div>
    </div>
  );
};

export default TodoItem;
