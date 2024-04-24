import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { tailAction } from "../redux/actions/tailAction";

const GalleryHome = () => {
  const dispatch = useDispatch();
  const tailList = useSelector((state) => state.tail);

  const getGallerys = () => {
    dispatch(tailAction.getTails());
  };
  useEffect(() => {
    getGallerys();
  }, []);

  console.log(tailList);
  return <div>GalleryHome</div>;
};

export default GalleryHome;
