const Ping = ({ area, it, getClickSn }) => {
  console.log(it?.districtName);
  const getSn = (e) => {
    const info = {
      district: e.target.id || e.target.parentNode.id,
      issueGbn: it.issueGbn,
      issueVal: it.issueVal,
      issueDate: it.issueDate,
    };

    getClickSn(info);
  };
  return (
    <div id={area} onClick={getSn}>
      <span>{it?.districtName ? it?.districtName : area}</span>
      <span>{it?.issueGbn ? it?.issueGbn : "로딩중.."}</span>
    </div>
  );
};

export default Ping;
