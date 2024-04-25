import React from "react";
import { useNavigate } from "react-router-dom/dist";

const DiaryList = () => {
  const navigate = useNavigate();
  return (
    <div className="diaryList">
      <div className="listHeader">
        <select>
          <option>최신순</option>
          <option>오래된순</option>
        </select>
        <span className="createNew" onClick={() => navigate("/new")}>
          새 일기 쓰기
        </span>
      </div>
    </div>
  );
};

export default DiaryList;
