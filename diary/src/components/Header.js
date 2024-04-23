import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = ({ title, left, right }) => {
  return (
    <div>
      <Row className="header">
        <Col className="left">{left}</Col>
        <Col className="title">{title}</Col>
        <Col className="right">{right}</Col>
      </Row>
    </div>
  );
};

export default Header;
