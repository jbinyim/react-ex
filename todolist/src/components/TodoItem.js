import React from "react";
import "./TodoItem.css";

const TodoItem = ({ it, onDelete, onUpDate }) => {
  return (
    <div className="todoItem">
      <div className="checkbox">
        <input
          type="checkbox"
          checked={it.isDone}
          onChange={() => onUpDate(it)}
        />
      </div>
      <div className="items">
        <div className="content">{it.content}</div>
        <div className="date">
          {new Date(it.createDate).toLocaleDateString()}
        </div>
      </div>
      <button onClick={() => onDelete(it)} className="btn">
        삭제
      </button>
    </div>
  );
};

export default TodoItem;
