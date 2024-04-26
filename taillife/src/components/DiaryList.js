import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import DiaryItem from "./DiaryItem";
import styled from "styled-components";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const navigate = useNavigate();
  useEffect(() => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return Number(b.date) - Number(a.date);
      } else {
        return Number(a.date) - Number(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data));
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

  return (
    <div className="diaryList">
      <div className="listHeader">
        <select value={sortType} onChange={onChangeSortType}>
          {sortOptionList.map((it, idx) => (
            <option key={idx} value={it.value}>
              {it.name}
            </option>
          ))}
        </select>
        <span className="createNew" onClick={() => navigate("/new")}>
          새 일기 쓰기
        </span>
      </div>
      <div>
        {sortedData.map((it) => (
          <DiaryItem key={it.id} it={it} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;

const ListOfDiary = styled.div``;
