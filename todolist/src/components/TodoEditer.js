import "./TodoEditer.css";
import React from "react";
import { useState, useRef } from "react";

const TodoEditer = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeText = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
    } else {
      onCreate(content);
      setContent("");
    }
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="todoEditer">
      <h3>Todo❕</h3>
      <div className="inputText">
        <input
          placeholder="오늘의 할 일"
          onKeyDown={onKeyDown}
          ref={inputRef}
          value={content}
          onChange={onChangeText}
        />
        <button onClick={onSubmit}>등록</button>
      </div>
    </div>
  );
};

export default TodoEditer;
