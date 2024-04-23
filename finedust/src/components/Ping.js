const Ping = ({ area, it, getClickSn }) => {
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
      <span>{it?.districtName}</span>
      <span>{it?.issueGbn}</span>
    </div>
  );
};

export default Ping;
