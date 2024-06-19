import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
`;

const MenuBox = styled.div`
  margin-left: 50px;
  display: flex;
  align-items: center;
  gap: 45px;
`;

const Img = styled.img`
  width: 92px;
  height: 50px;
  cursor: pointer;
`;

const MenuList = styled.ul`
  display: flex;
  gap: 20px;
`;

const Menu = styled.li`
  font-size: 14px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Header = () => {
  return (
    <HeaderBox>
      <MenuBox>
        <Img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170918.png" />
        <MenuList>
          <Menu>홈</Menu>
          <Menu>시리즈</Menu>
          <Menu>영화</Menu>
        </MenuList>
      </MenuBox>
      <div></div>
    </HeaderBox>
  );
};

export default Header;
