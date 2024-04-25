import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tailAction } from "../redux/actions/tailAction";
import GallerySearch from "../components/GallerySearch";
import GalleryCard from "../components/GalleryCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom/dist";

const GalleryHome = () => {
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const tailList = useSelector((state) => state.tail.tailList);

  const getGallerys = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(tailAction.getTails(searchQuery));
  };

  useEffect(() => {
    getGallerys();
  }, [query]);

  return (
    <Container>
      <GallerySearch />
      <Row>
        {tailList.map((item, idx) => (
          <Col key={idx} lg={3}>
            <GalleryCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GalleryHome;
