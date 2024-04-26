import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import DiaryEditor from "../components/DiaryEditor";

const DiaryEdit = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Header
        leftBtn={<Buttons text="<" onClick={() => navigate("/diary")} />}
        title="수정하기"
        rightBtn={<Buttons text="삭제" />}
      />
      <DiaryEditor />
    </Container>
  );
};

export default DiaryEdit;
