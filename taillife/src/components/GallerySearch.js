import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const GallerySearch = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const onChText = (e) => {
    setSearchText(e.target.value);
  };
  const onSearch = () => {
    navigate(`?q=${searchText}`);
  };
  const onCheckKeyEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`?q=${e.target.value}`);
      e.target.value = "";
    }
  };
  return (
    <div className="gallerySearch">
      <span>
        <FontAwesomeIcon
          onClick={onSearch}
          className="searchBtn"
          icon={faSearch}
        />
        <input
          onChange={onChText}
          onKeyUp={onCheckKeyEnter}
          className="searchInput"
          type="text"
          placeholder="제목을 검색하세요"
        />
      </span>
    </div>
  );
};

export default GallerySearch;
