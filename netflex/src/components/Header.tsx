import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const HeaderBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
`;

const MenuBox = styled.div`
  margin-left: 50px;
  display: flex;
  align-items: center;
  gap: 45px;
`;

const Logo = styled.img`
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

const SearcMenuhBox = styled.div`
  margin-right: 60px;
  display: flex;
  align-items: center;
  gap: 20px;
  .fa-bell {
    font-size: 20px;
    cursor: pointer;
  }
`;

const SearchBox = styled.div`
  width: 275px;
  display: flex;
  gap: 10px;
  padding: 5px;
  border: 1px solid #fff;
  .fa-magnifying-glass {
    font-size: 22px;
    cursor: pointer;
  }
`;

const Search = styled.input`
  width: 100%;
  height: 22px;
  background: transparent;
  border: none;
`;

const ProfileBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  .fa-chevron-down {
    font-size: 10px;
  }
`;

const Profile = styled.img`
  height: 32px;
  border-radius: 3px;
`;

const Header = () => {
  return (
    <HeaderBox>
      <MenuBox>
        <Logo
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170918.png"
          alt="logo"
        />
        <MenuList>
          <Menu>홈</Menu>
          <Menu>시리즈</Menu>
          <Menu>영화</Menu>
        </MenuList>
      </MenuBox>
      <SearcMenuhBox>
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          <Search type="text" placeholder="제목, 사람, 장르" />
        </SearchBox>
        <p>키즈</p>
        <FontAwesomeIcon icon={faBell} />
        <ProfileBox>
          <Profile
            src="https://i.pinimg.com/474x/61/54/76/61547625e01d8daf941aae3ffb37f653.jpg"
            alt="profile"
          />
          <FontAwesomeIcon icon={faSortDown} />
        </ProfileBox>
      </SearcMenuhBox>
    </HeaderBox>
  );
};

export default Header;
