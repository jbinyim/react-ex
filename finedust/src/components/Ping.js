const Ping = ({ area, it }) => {
  const getSn = (e) => {
    console.log(e.target.id || e.target.parentNode.id);
  };
  return (
    <div id={area} onClick={getSn}>
      <span>{it?.districtName}</span>
      <span>{it?.issueGbn}</span>
    </div>
  );
};

export default Ping;
