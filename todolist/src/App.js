import "./App.css";
import Header from "./components/Header";
import TodoEditer from "./components/TodoEditer";
import TodoList from "./components/TodoList";

import { useState, useRef } from "react";

const mockup = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "JS 공부하기",
    createDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockup);
  const idRef = useRef(2);
  // console.log(todo);
  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  return (
    <div className="App">
      <Header />
      <TodoEditer onCreate={onCreate} />
      <TodoList todo={todo} />
    </div>
  );
}

export default App;
