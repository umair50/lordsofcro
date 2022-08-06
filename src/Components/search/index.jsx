import "./index.css";
import Search from "../../assets/search-icon.png";
// import {faSearchRE}
const Index = (value) => {
  return (
    <div className="search-main">
      <input
        style={{ border: "none" }}
        type="search"
        placeholder={value.value}
        name="search"
        className="search-item"
      />
      <img src={Search} alt="search.png" className="icon-search" />
    </div>
  );
};
export default Index;
