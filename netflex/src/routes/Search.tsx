import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";

const SearchBox = styled.div`
  margin-top: 70px;
`;

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(keyword);
  return <SearchBox>searach</SearchBox>;
};

export default Search;
