import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import HeaderButton from "../components/HeaderButton";

const Home = () => {
  const [nowDate, setNowDate] = useState(new Date());

  const onDecreaseMonth = () => {
    setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() - 1));
  };
  const onIncreaseMonth = () => {
    setNowDate(new Date(nowDate.getFullYear(), nowDate.getMonth() + 1));
  };
  const headerTitle = `${nowDate.getFullYear()}년 ${nowDate.getMonth() + 1}월`;
  return (
    <Container className="home">
      <Header
        title={headerTitle}
        left={<HeaderButton text="<" onClick={onDecreaseMonth} />}
        right={<HeaderButton text=">" onClick={onIncreaseMonth} />}
      />
    </Container>
  );
};

export default Home;
