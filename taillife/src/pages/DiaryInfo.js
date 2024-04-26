import React from "react";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import Viewer from "../components/Viewer";
import useDiary from "../hook/useDiary";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getFormattedDate, setPageTitle } from "../util";

const DiaryInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useDiary(id);
  if (!data) {
    return <div>꼬리를 부르는 중입니다...</div>;
  } else {
    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(Number(date)))}의 꼬리`;
    return (
      <Container>
        <Header
          leftBtn={<Buttons text="<" onClick={() => navigate("/diary")} />}
          title={title}
          rightBtn={
            <Buttons text="수정" onClick={() => navigate(`/edit/${id}`)} />
          }
        />
        <Viewer content={content} emotionId={emotionId} />
      </Container>
    );
  }
};

export default DiaryInfo;
