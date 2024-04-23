import Ping from "./Ping";

const MapPing = ({ fineDust, getClickSn }) => {
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
      <Ping
        area="서울"
        getClickSn={getClickSn}
        areaNum={areaNum(i[0])}
        it={it}
      />
      <Ping
        area="인천"
        getClickSn={getClickSn}
        areaNum={areaNum(i[1])}
        it={it}
      />
      <Ping
        area="경기"
        getClickSn={getClickSn}
        areaNum={areaNum(i[2])}
        it={it}
      />
      <Ping
        area="강원"
        getClickSn={getClickSn}
        areaNum={areaNum(i[3])}
        it={it}
      />
      <Ping
        area="충남"
        getClickSn={getClickSn}
        areaNum={areaNum(i[4])}
        it={it}
      />
      <Ping
        area="충북"
        getClickSn={getClickSn}
        areaNum={areaNum(i[5])}
        it={it}
      />
      <Ping
        area="경남"
        getClickSn={getClickSn}
        areaNum={areaNum(i[6])}
        it={it}
      />
      <Ping
        area="경북"
        getClickSn={getClickSn}
        areaNum={areaNum(i[7])}
        it={it}
      />
      <Ping
        area="전남"
        getClickSn={getClickSn}
        areaNum={areaNum(i[8])}
        it={it}
      />
      <Ping
        area="전북"
        getClickSn={getClickSn}
        areaNum={areaNum(i[9])}
        it={it}
      />
      <Ping
        area="제주"
        getClickSn={getClickSn}
        areaNum={areaNum(i[10])}
        it={it}
      />
    </div>
  );
};
export default MapPing;
