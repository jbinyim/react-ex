import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import Buttons from "../components/Buttons";
import DiaryList from "../components/DiaryList";
import { Container } from "react-bootstrap";
import { DiaryStateContext } from "../App";
import { getMonthRangeByDate } from "../util";

const DiaryHome = () => {
  const data = useContext(DiaryStateContext);
  const [day, setDay] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(day);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [day, data]);

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
      <DiaryList data={filteredData} />
    </Container>
  );
};

export default DiaryHome;
