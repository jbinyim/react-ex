import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import DiaryEditor from "../components/DiaryEditor";
import { setPageTitle } from "../util";
import useDiary from "../hook/useDiary";
import { DiaryDispatchContext } from "../App";

const DiaryEdit = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setPageTitle("일기 수정하기");
  });
  const { id } = useParams();
  const data = useDiary(id);

  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다.")) {
      onDelete(id);
      navigate("/diary", { replace: true });
    }
  };

  const onSubmit = (data) => {
    if (window.confirm("일기를 수정할까요?")) {
      const { date, emotionId, content } = data;
      onUpdate(id, date, emotionId, content);
      navigate("/diary", { replace: true });
    }
  };

  return (
    <Container>
      <Header
        leftBtn={<Buttons text="<" onClick={() => navigate("/diary")} />}
        title="수정하기"
        rightBtn={<Buttons text="삭제" onClick={onClickDelete} />}
      />
      <DiaryEditor initData={data} onSubmit={onSubmit} />
    </Container>
  );
};

export default DiaryEdit;
