import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SearchContainer from "../search/search.component";

class Home extends React.Component {
  render() {
    return (
      <>
        <SearchContainer />
        <Container style={{ height: "5000px" }}>
          Home Component
        </Container>
      </>
    );
  }
}

export default Home;
