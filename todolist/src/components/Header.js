import React from "react";

const Header = () => {
  return (
    <div>
      <h2>오늘의 할 일✅</h2>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default Header;
