import React from "react";
import { Row, Col, Container } from "react-bootstrap";
// import SearchContainer from "../search/search.component";
import "./home.component.css";
import SearchContainer from "./search.container";
import CategorListContainer from "./categoryList.container";

class Home extends React.Component {
  render() {
    return (
      <>
        {/* <SearchContainer /> */}
        <div style={{ height: "5000px" }}>
          <SearchContainer />
          <CategorListContainer />
        </div>
      </>
    );
  }
}

export default Home;
