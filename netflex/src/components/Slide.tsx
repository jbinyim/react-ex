import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ImgPath } from "../util";
import { MovieResult } from "../api";

const Contents = styled.div<{ $bg: string }>`
  height: 100%;
  cursor: pointer;
  background: url(${(props) => props.$bg}) center/cover no-repeat;
`;

interface SlidePros {
  item: MovieResult;
}

const Slide = ({ item }: SlidePros) => {
  const navigate = useNavigate();

  const gotoModal = (id: number) => {
    navigate(`/movies/${id}`);
  };
  return (
    <Contents
      key={item.id}
      $bg={ImgPath(item.backdrop_path)}
      onClick={() => gotoModal(item.id)}
    ></Contents>
  );
};

export default Slide;
