import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom/dist";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import DiaryEditor from "../components/DiaryEditor";

const DiaryNew = () => {
  const navigate = useNavigate();
  const goToList = () => {
    navigate("/diary");
  };
  return (
    <Container>
      <Header
        title="새 일기 쓰기"
        leftBtn={<Buttons text="<" onClick={goToList} />}
      />
      <DiaryEditor />
    </Container>
  );
};

export default DiaryNew;
