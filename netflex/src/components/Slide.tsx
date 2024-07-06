import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ImgPath } from "../util";
import { MovieResult, getGenre, GenreI } from "../api";
import { useQuery } from "react-query";

const ContentsBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  transition: all 0.5s;

  &:hover {
    position: relative;
    z-index: 9999 !important;
    transform: translateY(-70px) scale(1.5);
    .desc {
      display: block;
    }
  }
`;

const Contents = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  cursor: pointer;
`;

const DescBox = styled.div`
  display: none;
  background: ${(props) => props.theme.bg};
  box-shadow: 0px 0px 10px #000;
  border-radius: 0 0 3px 3px;
  padding: 10px;
`;

const DescTitle = styled.h3`
  font-size: 0.99vw;
  letter-spacing: -1px;
  margin-bottom: 10px;
`;

interface SlidePros {
  item: MovieResult;
}

const IconBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Icons = styled.svg`
  width: 1.25vw;
  height: 1.25vw;
  fill: #fff;
  border: 1px solid #fff;
  border-radius: 100%;
  margin-right: 5px;
  cursor: pointer;

  &:first-child {
    fill: #000;
    background: #fff;
  }
  &:nth-child(3) {
    padding: 3px;
  }
  &:last-child {
    margin: 0;
  }
`;

const IconsBoxLeft = styled.div``;

const GenreBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Genre = styled.p`
  font-size: 0.833vw;
`;

const Slide = ({ item }: SlidePros) => {
  const navigate = useNavigate();

  const gotoModal = (id: string) => {
    navigate(`/movies/${id}`);
  };

  const { data: genre } = useQuery<GenreI>(["genres"], () => getGenre(), {
    refetchOnWindowFocus: false,
  });

  const itemGenreId = item.genre_ids.map((item) => item);

  const genreText = itemGenreId.map((it) =>
    genre?.genres.find((id) => it === id.id)
  );

  return (
    <ContentsBox>
      <Contents src={ImgPath(item.backdrop_path)} alt="logo" loading="lazy" />
      <DescBox className="desc">
        <DescTitle>{item.title}</DescTitle>
        <IconBox>
          <IconsBoxLeft>
            <Icons xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z" />
            </Icons>
            <Icons xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </Icons>
            <Icons xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
            </Icons>
          </IconsBoxLeft>
          <Icons
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            onClick={() => gotoModal(item.title)}
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </Icons>
        </IconBox>
        <GenreBox>
          {genreText.map((item) => (
            <Genre key={item?.id}>{item?.name}</Genre>
          ))}
        </GenreBox>
      </DescBox>
    </ContentsBox>
  );
};

export default Slide;
