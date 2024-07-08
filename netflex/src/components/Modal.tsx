import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getSearchMovies, SearchI, getGenre, GenreI } from "../api";
import { ImgPath } from "../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 11;
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 46.875vw;
  height: auto;
  max-height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 3px;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.bg};
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  overscroll-behavior: none;
  z-index: 12;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ModalBg = styled.div<{ $bgImg: string }>`
  width: 100%;
  height: 50vh;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(20, 20, 20, 1)),
    url(${(props) => props.$bgImg}) top/cover no-repeat;
`;

const ModalTextBox = styled.div`
  padding: 10px;
  display: flex;
  justify-content: right;
`;

const TitleBox = styled.div`
  position: absolute;
  bottom: 10%;
  left: 3%;
`;

const Title = styled.h3`
  font-size: 35px;
  margin-bottom: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const PlayBtn = styled.button`
  padding: 3px 15px;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
  .fa-play {
    font-size: 25px;
  }
`;

const Icons = styled.svg`
  width: 30px;
  height: 30px;
  fill: #fff;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 100%;
  margin-right: 5px;
  padding: 3px;
  cursor: pointer;
`;

const LastIcons = styled.svg`
  width: 30px;
  height: 30px;
  background: #000;
  border-radius: 100%;
  fill: #fff;
  padding: 3px;
  cursor: pointer;
`;

const DescBox = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const DescLeft = styled.div`
  max-width: 60%;
`;

const DescLeftTop = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const Average = styled.p`
  color: #00b400;
`;

const Day = styled.p`
  color: rgba(255, 255, 255, 0.6);
`;

const Overview = styled.p`
  line-height: 1.5rem;
`;

const DescRight = styled.div`
  max-width: 40%;
  display: flex;
  gap: 10px;
  font-size: 14px;
  letter-spacing: -1px;
  p:first-child {
    color: rgba(255, 255, 255, 0.5);
  }
`;

interface ModalPropsI {
  word: string;
}

const Modal = ({ word }: ModalPropsI) => {
  const navigate = useNavigate();

  const playVideo = (movieId: number) => {
    navigate(`/video?movieId=${movieId}`);
  };

  const closeModal = () => {
    navigate("/");
  };

  const { data: modalMovie, isLoading: modalLoading } = useQuery<SearchI>(
    ["modal"],
    () => getSearchMovies(word),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: genre, isLoading: genreLoading } = useQuery<GenreI>(
    ["genres"],
    () => getGenre(),
    {
      refetchOnWindowFocus: false,
    }
  );

  const isLoading = modalLoading && genreLoading;

  console.log(modalMovie);

  if (isLoading) {
    return <div>Loading</div>;
  } else {
    return (
      <ModalBox>
        {modalMovie?.results.map((item) => (
          <ModalContent key={item.id}>
            <ModalBg
              $bgImg={ImgPath(
                item.backdrop_path ? item.backdrop_path : item.poster_path
              )}
            >
              <ModalTextBox>
                <TitleBox>
                  <Title>{item.title}</Title>
                  <ButtonBox>
                    <PlayBtn onClick={() => playVideo(item.id)}>
                      <FontAwesomeIcon icon={faPlay} />
                      <p>재생</p>
                    </PlayBtn>
                    <Icons
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#5f6368"
                    >
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </Icons>
                    <Icons
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#5f6368"
                    >
                      <path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" />
                    </Icons>
                  </ButtonBox>
                </TitleBox>
                <LastIcons
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#5f6368"
                  onClick={closeModal}
                  className="closeBtn"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </LastIcons>
              </ModalTextBox>
            </ModalBg>
            <DescBox>
              <DescLeft>
                <DescLeftTop>
                  <Average>{item.vote_average}</Average>
                  <Day>{item.release_date}</Day>
                </DescLeftTop>
                <Overview>{item.overview}</Overview>
              </DescLeft>
              <DescRight>
                <p>장르:</p>
                <p>
                  {item.genre_ids
                    .map((id) => genre?.genres.find((it) => it.id === id)?.name)
                    .join(", ")}
                </p>
              </DescRight>
            </DescBox>
          </ModalContent>
        ))}
      </ModalBox>
    );
  }
};

export default Modal;
