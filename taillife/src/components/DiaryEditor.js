import React, { useCallback, useState, useEfffect } from "react";
import Buttons from "./Buttons";
import EmotionList from "./EmotionList";
import { useNavigate } from "react-router-dom/dist";
import { getEmotionImgById, emotionList } from "../util";
import styled from "styled-components";

const DiaryEditor = ({ onSubmit }) => {
  const [state, setState] = useState({});
  const navigate = useNavigate();

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({
      ...state,
      emotionId,
    }));
  }, []);
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
  };
  return (
    <div className="diaryEditor">
      <div className="today">
        <h4>오늘의 날짜</h4>
        <input type="date" value={state.date} onChange={handleChangeDate} />
      </div>
      <div className="todayEmotion">
        <h4>오늘의 감정</h4>
        <EmotionListWrapper>
          {emotionList.map((item, idx) => (
            <EmotionList
              key={idx}
              item={item}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === item.id}
            />
          ))}
        </EmotionListWrapper>
      </div>
      <div className="todayDiary">
        <h4>오늘의 일기</h4>
        <textarea
          placeholder="오늘의 꼬리는?"
          value={state.content}
          onChange={handleChangeContent}
        />
      </div>
      <div className="editorBottomBtn">
        <Buttons text="취소하기" onClick={() => navigate("/diary")} />
        <Buttons text="저장하기" className="saveBtn" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default DiaryEditor;

const EmotionListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2%;
  overflow-x: scroll;
  flex-wrap: no-wrap;
`;
