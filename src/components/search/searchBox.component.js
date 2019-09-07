import React from "react";
import "./search.css";

const SearchBox = () => (
  <React.Fragment>
    <input
      className="search-box"
      placeholder="Search Papers by Title, Author(s), Abstract... "
    />
  </React.Fragment>
);

export default SearchBox;
