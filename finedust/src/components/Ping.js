const Ping = ({ area, it, getClickSn }) => {
  const getSn = (e) => {
    getClickSn(e.target.id || e.target.parentNode.id);
  };
  return (
    <div id={area} onClick={getSn}>
      <span>{it?.districtName}</span>
      <span>{it?.issueGbn}</span>
    </div>
  );
};

export default Ping;
