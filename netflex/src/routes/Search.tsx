import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getSearchMovies, SearchI } from "../api";
import { ImgPath } from "../util";
import Slide from "../components/Slide";

const SearchBox = styled.div`
  margin-top: 70px;
  padding: 0 60px;
`;

const ContentsTitleBox = styled.div`
  margin: 150px 0 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContentsTitle = styled.p`
  font-size: 1.563vw;
  color: rgba(255, 255, 255, 0.5);
`;

const ContentsText = styled.p`
  font-size: 1.302vw;
  border-right: 1px solid #fff;
  padding-right: 10px;
  &:last-child {
    border: none;
  }
`;

const ContentsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const Content = styled.div<{ $bgImg: string }>`
  height: 16.3vh;
  background: url(${(props) => props.$bgImg}) center/cover no-repeat;
  margin-bottom: 100px;
`;

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const { data, isLoading, refetch } = useQuery<SearchI>(
    ["searchMulti"],
    () => getSearchMovies(keyword),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    refetch();
  }, [keyword, refetch]);

  if (isLoading) {
    return <div>Loading</div>;
  } else {
    return (
      <SearchBox>
        <ContentsTitleBox>
          <ContentsTitle>다음과 관련된 컨텐츠</ContentsTitle>
          {data?.results.slice(0, 4).map((item) => (
            <ContentsText key={item.backdrop_path}>{item.title}</ContentsText>
          ))}
        </ContentsTitleBox>
        <ContentsBox>
          {data?.results.map((item) => (
            <Slide key={item.id} item={item} />
            // <Content
            //   key={item.id}
            //   $bgImg={ImgPath(
            //     item.backdrop_path ? item.backdrop_path : item.poster_path
            //   )}
            // ></Content>
          ))}
        </ContentsBox>
      </SearchBox>
    );
  }
};

export default Search;
