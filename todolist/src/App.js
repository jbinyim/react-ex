import "./App.css";
import Header from "./components/Header";
import TodoEditer from "./components/TodoEditer";
import TodoList from "./components/TodoList";

import { useState, useRef } from "react";

// const mockup = [
//   {
//     id: 0,
//     isDone: false,
//     content: "React 공부하기",
//     createDate: new Date().getTime(),
//   },
//   {
//     id: 1,
//     isDone: false,
//     content: "JS 공부하기",
//     createDate: new Date().getTime(),
//   },
// ];

function App() {
  const [todo, setTodo] = useState([]);
  const idRef = useRef(2);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
    // localStorage.setItem("todoList", JSON.stringify(newItem));
  };

  const onUpDate = (targetId) => {
    const newItem = setTodo(
      todo.map((it) =>
        it.id === targetId.id ? { ...it, isDone: !it.isDone } : it
      )
    );
    // localStorage.setItem("todoList", JSON.stringify(newItem));
  };

  const onDelete = (targetId) => {
    const newItem = setTodo(todo.filter((it) => it.id !== targetId.id));
    // localStorage.setItem("todoList", JSON.stringify(newItem));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditer onCreate={onCreate} />
      <TodoList todo={todo} onDelete={onDelete} onUpDate={onUpDate} />
    </div>
  );
}

export default App;
