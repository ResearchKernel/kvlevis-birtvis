import React from "react";
import { Row, Col } from "antd";
import Navbar from "../common/navbar/navbar.component";
import HeaderJumbo from "../common/header-jumbo/header-jumbo.component";
import { Container } from "react-bootstrap";
import Sidebar from "../common/sidebar/sidebar.component";
import Categories from "../common/categories/categories.component";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Row className="rk-header">
          <Col md={24}>
            <Container>
              <Navbar />
            </Container>
          </Col>
          <Col md={24}>
            <HeaderJumbo />
          </Col>
        </Row>
        <Container>
          <Row className="rk-content">
            <Col md={6} sm={24}>
              <Sidebar />
            </Col>
            <Col md={18} sm={24}>
              <Categories />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
