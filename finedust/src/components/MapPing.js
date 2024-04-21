import React from "react";

const MapPing = ({ fineDust }) => {
  console.log(fineDust);
  return (
    <div className="mapImg">
      {fineDust.map((it) => {
        if (it.sn == 268) {
          console.log(it.issueGbn);
        }
      })}
      <div id="서울"></div>
      <div id="인천"></div>
      <div id="경기"></div>
      <div id="강원"></div>
      <div id="충남"></div>
      <div id="충북"></div>
      <div id="경남"></div>
      <div id="경북"></div>
      <div id="전남"></div>
      <div id="전북"></div>
      <div id="제주"></div>
    </div>
  );
};

export default MapPing;
