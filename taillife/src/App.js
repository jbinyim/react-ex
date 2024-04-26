import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GalleryHome from "./pages/GalleryHome";
import DiaryHome from "./pages/DiaryHome";
import NavBar from "./components/NavBar";
import GalleryDetail from "./components/GalleryDetail";
import DiaryEdit from "./pages/DiaryEdit";
import DiaryNew from "./pages/DiaryNew";
import DiaryInfo from "./pages/DiaryInfo";
import { Routes, Route } from "react-router-dom";
import React, { useReducer, useRef, useEffect, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newState = [action.data, ...state];
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    default: {
      return state;
    }
  }
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const rawData = localStorage.getItem("diary");
    if (!rawData) {
      setIsDataLoaded(true);
      return;
    }
    const localData = JSON.parse(rawData);
    if (localData.length === 0) {
      setIsDataLoaded(true);
      return;
    }
    localData.sort((a, b) => Number(b.id) - Number(a.id));
    idRef.current = localData[0].id + 1;
    dispatch({
      type: "INIT",
      data: localData,
    });
    setIsDataLoaded(true);
  }, []);

  const onCreate = (date, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        emotionId,
        content,
      },
    });
    idRef.current += 1;
  };
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate }}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<GalleryHome />} />
            <Route path="/gallery/:id" element={<GalleryDetail />} />
            <Route path="/diary" element={<DiaryHome />} />
            <Route path="/new" element={<DiaryNew />} />
            <Route path="/diaryinfo/:id" element={<DiaryInfo />} />
            <Route path="/edit/:id" element={<DiaryEdit />} />
          </Routes>
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
