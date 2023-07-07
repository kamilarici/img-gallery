const Picture = ({ photographer, src: { large } }) => {
  return (
    <div className="img-div">
      <div>
        <img className="img" src={large} alt="" />
        <p className="p">{photographer}</p>
      </div>
    </div>
  );
};

export default Picture;
