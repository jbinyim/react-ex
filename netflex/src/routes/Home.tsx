import React from "react";
import { useQuery } from "react-query";
import { getPopMovies, MovieResponse } from "../api";
import { ImgPath } from "../util";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const HomeBox = styled.div<{ $bgImg: string }>`
  width: 100%;
  height: 870px;
  padding: 0 60px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.$bgImg}) center/cover no-repeat;
`;

const BoxTop = styled.div`
  padding-top: 200px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Logo = styled.img`
  height: 50px;
`;

const MovieText = styled.h3`
  font-size: 28px;
  color: rgba(255, 255, 255, 0.7);
`;

const Title = styled.h1`
  font-size: 120px;
  letter-spacing: -1px;
`;

const OverViewText = styled.p`
  max-width: 700px;
  font-size: 25px;
  margin: 20px 0;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 15px;
`;

const PlayBtn = styled.button`
  padding: 13px 35px;
  font-size: 23px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
  .fa-play {
    font-size: 30px;
  }
`;

const DetailBtn = styled.button`
  padding: 13px 35px;
  font-size: 23px;
  color: #fff;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  gap: 15px;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  .fa-circle-info {
    font-size: 30px;
  }
`;

const Home = () => {
  const { data, isLoading } = useQuery<MovieResponse>(["popMovies"], () =>
    getPopMovies()
  );
  console.log(data);
  if (isLoading) {
    return <div>Loding</div>;
  } else {
    return (
      <Container>
        <HomeBox $bgImg={ImgPath(data?.results[0].backdrop_path)}>
          <BoxTop>
            <Logo
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
              alt="logo"
            />
            <MovieText>영화</MovieText>
          </BoxTop>
          <Title>{data?.results[0].title}</Title>
          <OverViewText>{data?.results[0].overview}</OverViewText>
          <BtnBox>
            <PlayBtn>
              <FontAwesomeIcon icon={faPlay} />
              <p>재생</p>
            </PlayBtn>
            <DetailBtn>
              <FontAwesomeIcon icon={faCircleInfo} />
              <p>상세 정보</p>
            </DetailBtn>
          </BtnBox>
        </HomeBox>
      </Container>
    );
  }
};

export default Home;
