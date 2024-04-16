import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
  return (
    <div className="todoList">
      <h4>TodoList</h4>
      <input placeholder="검색어를 입력하세요" />
      <div className="listWrapper">
        <TodoItem todo={todo} />;
      </div>
    </div>
  );
};

export default TodoList;
