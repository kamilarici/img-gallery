import Picture from "./Picture";
import data from "./data";

const Homepage = () => {
  return (
    <div>
      {/* <h1>homepage</h1> */}
      <div className="home-div">
        {data.map((item) => (
          <Picture {...item} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
