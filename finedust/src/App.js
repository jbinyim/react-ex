import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./components/Content";
import MapPing from "./components/MapPing";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const apiKey =
  "2q1EVxA7X%2FVrtrl9akxgR8LTKQpXfPkEvMKXLLyzTb1jBgkwa2coV%2F0LI4o8RKX4JqjGPmlin0JPcv%2BIkQ6%2FUg%3D%3D";
const currentYear = new Date().getFullYear();

function App() {
  const [fineDust, setFineDust] = useState([]);
  const [clickSn, setClickSn] = useState({});

  const getDustCurrent = async () => {
    const url = `https://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?serviceKey=${apiKey}&returnType=json&numOfRows=100&pageNo=1&year=${currentYear}`;

    const response = await fetch(url);
    const data = await response.json();
    const dust = data.response.body.items;
    setFineDust(dust);
  };

  const getClickSn = (info) => {
    setClickSn(info);
  };

  useEffect(() => {
    getDustCurrent();
  }, [clickSn]);

  return (
    <div className="content">
      <Container className="app">
        <h1 className="title">전국 미세먼지</h1>
        <p>지역 클릭시 상세 정보를 확인 할 수 있어요!</p>
        <Content clickSn={clickSn} />
        <MapPing fineDust={fineDust} getClickSn={getClickSn} />
      </Container>
    </div>
  );
}

export default App;
