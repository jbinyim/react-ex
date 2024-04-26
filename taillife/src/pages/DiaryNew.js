import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom/dist";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import DiaryEditor from "../components/DiaryEditor";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";

const DiaryNew = () => {
  const navigate = useNavigate();
  const goToList = () => {
    navigate("/diary");
  };

  const { onCreate } = useContext(DiaryDispatchContext);
  const onSubmit = (data) => {
    const { date, emotionId, content } = data;
    onCreate(date, emotionId, content);
    navigate("/diary");
  };
  return (
    <Container>
      <Header
        title="새 일기 쓰기"
        leftBtn={<Buttons text="<" onClick={goToList} />}
      />
      <DiaryEditor onSubmit={onSubmit} />
    </Container>
  );
};

export default DiaryNew;
