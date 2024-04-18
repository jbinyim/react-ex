import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todo, onDelete, onUpDate }) => {
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

  const totalCount = todo.length;
  const totalDone = todo.filter((it) => it.isDone).length;
  const totalIsDone = totalCount - totalDone;
  return (
    <div className="todoList">
      <h3>TodoList❕</h3>
      <div className="totalLp">
        <p>- 총 개수 : {totalCount} </p>
        <p>- 완료한 일 : {totalDone} </p>
        <p>- 완료되지 못한 일 : {totalIsDone} </p>
      </div>
      <div className="searchBar">
        <input
          value={search}
          onChange={searchText}
          placeholder="검색어를 입력하세요"
        />
        <div className="listWrapper">
          {searchList().map((it) => (
            <TodoItem
              key={it.id}
              it={it}
              onDelete={onDelete}
              onUpDate={onUpDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
