import React from "react";
import { Row, Col } from "react-bootstrap";

const Header = ({ title, leftBtn, rightBtn }) => {
  return (
    <Row className="header">
      <Col>{leftBtn}</Col>
      <Col className="headerTitle">{title}</Col>
      <Col>{rightBtn}</Col>
    </Row>
  );
};

export default Header;
