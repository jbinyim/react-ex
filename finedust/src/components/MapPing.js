import React, { useState, useEffect } from "react";
import Ping from "./Ping";

const MapPing = ({ fineDust }) => {
  const i = [268, 282, 287, 314, 265, 259, 318, 330, 293, 285, 225];
  let it = {};
  const areaNum = (num) => {
    fineDust.map((item) => {
      if (item.sn == num) {
        return (it = item);
      }
    });
  };

  return (
    <div className="mapImg">
      <Ping area="서울" areaNum={areaNum(i[0])} it={it} />
      <Ping area="인천" areaNum={areaNum(i[1])} it={it} />
      <Ping area="경기" areaNum={areaNum(i[2])} it={it} />
      <Ping area="강원" areaNum={areaNum(i[3])} it={it} />
      <Ping area="충남" areaNum={areaNum(i[4])} it={it} />
      <Ping area="충북" areaNum={areaNum(i[5])} it={it} />
      <Ping area="경남" areaNum={areaNum(i[6])} it={it} />
      <Ping area="경북" areaNum={areaNum(i[7])} it={it} />
      <Ping area="전남" areaNum={areaNum(i[8])} it={it} />
      <Ping area="전북" areaNum={areaNum(i[9])} it={it} />
      <Ping area="제주" areaNum={areaNum(i[10])} it={it} />
    </div>
  );
};
export default MapPing;
