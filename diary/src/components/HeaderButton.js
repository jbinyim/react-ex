import React from "react";

const HeaderButton = ({ text, onClick }) => {
  return (
    <button className={`button`} onClick={onClick}>
      {text}
    </button>
  );
};

export default HeaderButton;
