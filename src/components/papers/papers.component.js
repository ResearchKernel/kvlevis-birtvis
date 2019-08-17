import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./sidebar/sidebar.component";
import Posts from "./posts/posts.component";

class Papers extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={4}>
            <Sidebar />
          </Col>
          <Col md={8}>
            <Posts />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Papers;
