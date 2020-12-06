import React from "react";
import "./SearchBar.style.css";

const SearchBar = (props) => {
  const style = {
    background: props.color,
    "background-image":
      "url(https://www.pngfind.com/pngs/b/54-545056_search-icon-png.png)",
    "background-size": "20px 20px",
    "background-repeat": "no-repeat",
    "background-position-x": "97%",
    "background-position-y": "11px",
  };
  return (
    <div className="Search">
      <input
        className="input"
        style={style}
        type="search"
        placeholder={props.placeholder + "            "}
        onChange={props.changed}
      ></input>
    </div>
  );
};

export default SearchBar;
