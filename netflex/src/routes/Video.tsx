import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import YouTube, { YouTubeProps } from "react-youtube";
import { getVideo, VideoI } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const VideoBox = styled.div`
  width: 100%;
  height: 100vh;
  div {
    height: 99%;
  }
  span {
    display: none;
  }
  &:hover {
    span {
      display: block;
      position: absolute;
      top: 20px;
      left: 30px;
      background: #000;
      padding: 10px;
      border-radius: 100%;
      color: #fff;
      font-size: 25px;
      cursor: pointer;
    }
  }
`;

const Video = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("movieId");

  const { data: movievideo } = useQuery<VideoI>(
    ["videoMovie"],
    () => getVideo(Number(keyword)),
    {
      refetchOnWindowFocus: false,
    }
  );

  const backPage = () => {
    navigation(-1);
  };

  console.log(movievideo);

  const opts: YouTubeProps[`opts`] = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <VideoBox>
      <span onClick={backPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </span>
      <YouTube videoId={movievideo?.results[0].key} opts={opts} />
    </VideoBox>
  );
};

export default Video;
