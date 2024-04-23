import React from "react";
import { Table } from "react-bootstrap";

const Content = ({ clickSn }) => {
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
            <td>{clickSn.district}</td>
            <td>{clickSn.issueGbn}</td>
            <td>{clickSn.issueVal}m3</td>
            <td>{clickSn.issueDate}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Content;
