import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getNowMovies, MovieResponse } from "../api";
import { ImgPath } from "../util";
import { useMatch, PathMatch, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieSlide from "../components/MovieSlide";
import Slide from "../components/Slide";
import Modal from "../components/Modal";

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* 나중에 수정 */
  margin-bottom: 200px;
`;

const HomeBox = styled.div<{ $bgImg: string }>`
  width: 100%;
  height: 93vh;
  padding: 0 60px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(20, 20, 20, 1)),
    url(${(props) => props.$bgImg}) top/cover no-repeat;
`;

const BoxTop = styled.div`
  padding-top: 20vh;
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
  font-size: 5.208vw;
  letter-spacing: -1px;
`;

const OverViewText = styled.p`
  max-width: 700px;
  font-size: 1.302vw;
  margin: 20px 0;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 15px;
`;

const PlayBtn = styled.button`
  padding: 1.3vh 1.823vw;
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
  padding: 1.3vh 1.823vw;
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

const MainBox = styled.div`
  margin: 0 60px;
  .react-multi-carousel-list {
    overflow: visible;
    position: relative;
    .react-multi-carousel-track {
      gap: 10px;
      li {
        transform-style: flat;
        height: 16.3vh;
      }
    }
    .react-multiple-carousel__arrow {
      position: absolute;
      height: 100%;
      border-radius: 0;
      &::before {
        font-size: 30px;
      }
    }
    .react-multiple-carousel__arrow--left {
      left: -60px;
    }
    .react-multiple-carousel__arrow--right {
      right: -60px;
    }
  }
`;

const FirstContent = styled.div`
  transform: translateY(-8vh);
  margin-bottom: 2vh;
`;

const SubTitle = styled.p`
  font-size: 26px;
  margin-bottom: 20px;
`;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  const navigation = useNavigate();
  const modalId: PathMatch<"modalId"> | null = useMatch("/movies/:modalId");

  const { data: nowMovie, isLoading: popLoading } = useQuery<MovieResponse>(
    ["popMovies"],
    () => getNowMovies(),
    {
      refetchOnWindowFocus: false,
    }
  );

  const videoPlay = (movieId: number) => {
    navigation(`/video?movieId=${movieId}`);
  };

  const moviedetail = (movieTitle: string | undefined) => {
    navigation(`/movies/${movieTitle}`);
  };

  const isLoading = popLoading;
  const dataLoading = nowMovie;

  if (isLoading && !dataLoading) {
    return <div>Loding</div>;
  } else {
    return (
      <Container>
        <HomeBox $bgImg={ImgPath(nowMovie?.results[0].backdrop_path)}>
          <BoxTop>
            <Logo
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
              alt="logo"
            />
            <MovieText>영화</MovieText>
          </BoxTop>
          <Title>{nowMovie?.results[0].title}</Title>
          <OverViewText>{nowMovie?.results[0].overview}</OverViewText>
          <BtnBox>
            <PlayBtn onClick={() => videoPlay(Number(nowMovie?.results[0].id))}>
              <FontAwesomeIcon icon={faPlay} />
              <p>재생</p>
            </PlayBtn>
            <DetailBtn onClick={() => moviedetail(nowMovie?.results[0].title)}>
              <FontAwesomeIcon icon={faCircleInfo} />
              <p>상세 정보</p>
            </DetailBtn>
          </BtnBox>
        </HomeBox>
        <MainBox>
          <FirstContent>
            <SubTitle>새로 올라온 콘텐츠</SubTitle>
            <Carousel responsive={responsive}>
              {nowMovie?.results.map((item) => (
                <Slide key={item.id} item={item} />
              ))}
            </Carousel>
          </FirstContent>
          <MovieSlide />
        </MainBox>
        {modalId?.params.modalId && (
          <Modal word={decodeURIComponent(modalId?.params.modalId)} />
        )}
      </Container>
    );
  }
};

export default Home;
