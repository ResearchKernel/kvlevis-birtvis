import React from "react";
import { Row, Col } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Col md={4} sm={12}>
            Sidebar
          </Col>
          <Col md={12} sm={12}>
            Posts
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
