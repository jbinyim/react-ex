import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todo, onDelete }) => {
  const [search, setSearch] = useState("");
  const searchText = (e) => {
    setSearch(e.target.value);
  };
  const searchList = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLocaleLowerCase())
        );
  };
  return (
    <div className="todoList">
      <h3>TodoList❕</h3>
      <div className="searchBar">
        <input
          value={search}
          onChange={searchText}
          placeholder="검색어를 입력하세요"
        />
        <div className="listWrapper">
          {searchList().map((it) => (
            <TodoItem key={it.id} it={it} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
