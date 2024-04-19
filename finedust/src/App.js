import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./components/Content";
import Map from "./components/Map";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const apiKey =
  "GyxfVGU8XkFeOXVhO0uvXD0goIGWlePJkuuWB1zujkWtofZZ60es1zd18eBU3Yk8%2FzZy%2Fueuy%2BzVqgJQ6vEb5Q%3D%3D";
const currentYear = new Date().getFullYear();

function App() {
  const [fineDust, setFineDust] = useState();
  // const getDistrictName = (data) => {
  //   data.map((it) => {
  //     switch (it.districtName) {
  //       case "서울":
  //         return it;
  //     }
  //   });
  // };

  const getDustCurrent = async () => {
    const url = `https://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?serviceKey=${apiKey}&returnType=json&numOfRows=100&pageNo=1&year=${currentYear}`;

    const response = await fetch(url);
    const data = await response.json();
    const dust = data.response.body.items;
    setFineDust(dust);
    // getDistrictName(dust);
  };
  useEffect(() => {
    getDustCurrent();
  }, []);
  return (
    <div className="content">
      <Container className="app">
        <h1 className="title">전국 미세먼지</h1>
        <Content />
        <Map fineDust={fineDust} />
      </Container>
    </div>
  );
}

export default App;
