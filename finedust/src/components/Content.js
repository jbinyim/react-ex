import React from "react";
import { Table } from "react-bootstrap";

const Content = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead className="content_thead">
          <tr className="thead_tr">
            <th>지역명</th>
            <th>경보 단계</th>
            <th>미세먼지 농도</th>
            <th>발령 날짜</th>
          </tr>
        </thead>
        <tbody className="content_tbody">
          <tr className="tbody_tr">
            <td>제주</td>
            <td>주의보</td>
            <td>182 m3</td>
            <td>2024-04-17</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Content;
