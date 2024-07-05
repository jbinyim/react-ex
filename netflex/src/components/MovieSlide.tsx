import React from "react";
import styled from "styled-components";
import { ImgPath } from "../util";
import Slide from "./Slide";
import { useQuery } from "react-query";
import {
  RatedMovie,
  getRatedMovies,
  getUpComingMovies,
  UpcomingMovie,
} from "../api";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SceondContent = styled.div`
  margin-bottom: 60px;
  .react-multi-carousel-list {
    overflow: visible;
    position: relative;
    height: 20.6vh;
    .react-multi-carousel-track {
      height: 100%;
      gap: 10px;
      li {
        height: 100%;
        transform-style: flat;
      }
    }
    .react-multiple-carousel__arrow {
      height: 100%;
    }
  }
`;

const TopContents = styled.div`
  height: 20.6vh;
  display: flex;
  p {
    font-size: 25vh;
    font-weight: bold;
    line-height: 19vh;
    letter-spacing: -2.083vw;
    text-align: left;
    color: #000;
    -webkit-text-stroke: 5px #595959;
  }
  .top10 {
    font-size: 20vh;
    transform: translateX(-1.042vw);
  }
  img {
    height: 100%;
    z-index: 1;
  }
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

const MovieSlide = () => {
  const { data: ratedMovie, isLoading: ratedLoading } = useQuery<RatedMovie>(
    ["ratedMovies"],
    () => getRatedMovies(),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: upComingMovie, isLoading: upComingLoading } =
    useQuery<UpcomingMovie>(["upCompingMovies"], () => getUpComingMovies(), {
      refetchOnWindowFocus: false,
    });

  const isLoading = ratedLoading && upComingLoading;

  if (isLoading) {
    return <div>Loading</div>;
  } else {
    return (
      <div>
        <SceondContent>
          <SubTitle>오늘 TOP 10 영화</SubTitle>
          <Carousel responsive={responsive}>
            {ratedMovie?.results.slice(0, 10).map((item, idx) => (
              <TopContents key={item.id}>
                <p className={`top${idx + 1}`}>{idx + 1}</p>
                <img src={ImgPath(item.poster_path)} alt="movieposter" />
              </TopContents>
            ))}
          </Carousel>
        </SceondContent>
        <SubTitle>다가오는 영화</SubTitle>
        <Carousel responsive={responsive}>
          {upComingMovie?.results.map((item) => (
            <Slide key={item.id} item={item} />
          ))}
        </Carousel>
      </div>
    );
  }
};

export default MovieSlide;
