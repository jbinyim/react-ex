import React from "react";
import { useNavigate } from "react-router-dom";

const GalleryCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/gallery/${item.id}`);
  };
  return (
    <div className="galleryCard" onClick={showDetail}>
      <img src={item?.img} alt="imginfo" />
      <h4>{item?.title}</h4>
      <p>{item?.date}</p>
    </div>
  );
};

export default GalleryCard;
