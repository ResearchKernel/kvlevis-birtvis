import React from "react";
import { Row, Col } from "react-bootstrap";
import Sidebar from "./sidebar/sidebar.component";
import Posts from "./posts/posts.component";

class Papers extends React.Component {
  render() {
    return (
      <Row>
        <Col md={3}>
          <Sidebar className="sidebar" />
        </Col>
        <Col md={9}>
          <Posts className="posts" />
        </Col>
      </Row>
    );
  }
}

export default Papers;
