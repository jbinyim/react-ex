import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const GallerySearch = () => {
  const navigate = useNavigate();
  const onSearch = () => {};
  const onCheckKeyEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`q=${e.target.value}`);
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
          onKeyUp={onCheckKeyEnter}
          className="searchInput"
          type="text"
          placeholder="제목을 입력하세요"
        />
      </span>
    </div>
  );
};

export default GallerySearch;
