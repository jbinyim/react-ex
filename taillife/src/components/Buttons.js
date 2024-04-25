import React from "react";

const Buttons = ({ text, onClick }) => {
  return (
    <button className="coomonBtn" onClick={onClick}>
      {text}
    </button>
  );
};

export default Buttons;
