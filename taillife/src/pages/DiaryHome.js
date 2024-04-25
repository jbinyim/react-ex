import React, { useState } from "react";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import DiaryList from "../components/DiaryList";
import { Container } from "react-bootstrap";

const DiaryHome = () => {
  const [day, setDay] = useState(new Date());
  const onDecreaseMonth = () => {
    setDay(new Date(day.getFullYear(), day.getMonth() - 1));
  };
  const onIncreaseMonth = () => {
    setDay(new Date(day.getFullYear(), day.getMonth() + 1));
  };
  const headerTitle = `${day.getFullYear()}년 ${day.getMonth() + 1}월`;
  return (
    <Container>
      <Header
        title={headerTitle}
        leftBtn={<Buttons text="<" onClick={onDecreaseMonth} />}
        rightBtn={<Buttons text=">" onClick={onIncreaseMonth} />}
      />
      <DiaryList />
    </Container>
  );
};

export default DiaryHome;
