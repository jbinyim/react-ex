import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const HeaderBox = styled.div<{ $position: number }>`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) => (props.$position > 70 ? "#000" : "transparent")};
  transition: all 0.3s;
  z-index: 10;
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

const SearchBox = styled.div<{ $searchBtn: boolean }>`
  margin-right: 10px;
  transition: all 0.3s;
  width: ${(props) => (props.$searchBtn === true ? "275px" : "0")};
  display: flex;
  gap: 10px;
  padding: 5px;
  background: ${(props) => (props.$searchBtn === true ? "#000" : "none")};
  border: ${(props) => (props.$searchBtn === true ? "1px solid #fff" : "none")};
  .fa-magnifying-glass {
    font-size: 22px;
    cursor: pointer;
  }
`;

const Search = styled.input<{ $searchBtn: boolean }>`
  transition: all 0.3s;
  width: ${(props) => (props.$searchBtn === true ? "100%" : "0")};
  height: 22px;
  background: #000;
  border: none;
  outline: none;
  color: #fff;
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
  const [searchBtn, setSearchBtn] = useState(false);
  const [position, sePosition] = useState(0);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSearch = (e: any) => {
    if (e.key === "Enter") {
      navigate(`/search?keyword=${searchText}`);
    }
  };

  function onScroll() {
    sePosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [searchText]);

  return (
    <HeaderBox $position={position}>
      <MenuBox>
        <Logo
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_logo_icon_170918.png"
          alt="logo"
          onClick={goToHome}
        />
        <MenuList>
          <Menu>홈</Menu>
          <Menu>시리즈</Menu>
          <Menu>영화</Menu>
        </MenuList>
      </MenuBox>
      <SearcMenuhBox>
        <SearchBox $searchBtn={searchBtn}>
          <FontAwesomeIcon
            onClick={() => setSearchBtn((prev) => !prev)}
            icon={faSearch}
          />
          <Search
            $searchBtn={searchBtn}
            type="text"
            placeholder="제목, 사람, 장르"
            onChange={onInput}
            onKeyUp={onSearch}
          />
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
