import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import YouTube from "react-youtube";

const GalleryDetail = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getTailDetail = async () => {
    const url = `https://my-json-server.typicode.com/jbinyim/mydb-json/goolee/${id}`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setDetail(data);
  };

  useEffect(() => {
    getTailDetail();
  }, []);

  if (loading || detail == null) {
    return (
      <Spinner
        className="loading"
        animation="border"
        role="status"
        variant="danger"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <Container className="galleryDetail">
        <Row>
          <Col className="video">
            <YouTube
              videoId={detail.link}
              opts={{ width: "100%", height: "600" }}
            />
          </Col>
          <Col className="desription">
            <Link className="x" to="/">
              뒤로가기
            </Link>
            <h3>{detail.title}</h3>
            <p>{detail.date}</p>
            <a href="https://www.youtube.com/@user-ggolovely" target="_black">
              다양한 영상 보러가기
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default GalleryDetail;
