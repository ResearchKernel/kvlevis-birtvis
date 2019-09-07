import React, { Component } from "react";
import { connect } from "react-redux";
import Waves from "css-waves/Waves";
import { searchVisible } from "./../../_actions/searchVisible.action";
import SearchBox from "./searchBox.component";
import "./search.css";
import interSectionObersever from "./intersectionObserver";

@connect()
class SearchContainer extends Component {
  handleChange = event => {
    this.props.dispatch(searchVisible(event[0].isIntersecting));
  };

  componentDidMount() {
    interSectionObersever(this.handleChange, "search-box");
  }

  render() {
    return (
      <div className="search-container">
        <div className="main-heading">
          <div className="custom-heading">Search Papers</div>
          <div className="search-obersever" id="search-box">
            <SearchBox />
          </div>
        </div>

        <Waves />
      </div>
    );
  }
}

export default SearchContainer;
