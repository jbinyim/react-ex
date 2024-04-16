import React from "react";

const TodoItem = ({ todo }) => {
  console.log(todo);
  const result = (todo) => {
    todo.map((it) => {
      return it;
    });
  };
  return (
    <div className="todoItem">
      <div className="checkbox">
        <input type="checkbox" />
      </div>
      <div className="content">{result(todo)}</div>
    </div>
  );
};

export default TodoItem;
