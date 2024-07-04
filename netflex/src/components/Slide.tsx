import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ImgPath } from "../util";
import { MovieResult } from "../api";

const ContentsBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  &:hover {
    position: relative;
    z-index: 99;
    transform: translateY(-50px) scale(1.3);

    .desc {
      display: block;
    }
  }
`;

const Contents = styled.img`
  width: 100%;
  height: 100%;
`;

const DescBox = styled.div`
  display: none;
  background: ${(props) => props.theme.bg};
`;

const DescTitle = styled.h3`
  font: 1.1875rem;
`;

interface SlidePros {
  item: MovieResult;
}

const Slide = ({ item }: SlidePros) => {
  const navigate = useNavigate();

  const gotoModal = (id: string) => {
    navigate(`/movies/${id}`);
  };
  return (
    <ContentsBox onClick={() => gotoModal(item.title)}>
      <Contents src={ImgPath(item.backdrop_path)} alt="logo" loading="lazy" />
      <DescBox className="desc">
        <DescTitle>{item.title}</DescTitle>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </div>
      </DescBox>
    </ContentsBox>
  );
};

export default Slide;
