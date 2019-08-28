import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routeList } from "../common/static/routes";

const styles = {
  header: {
    width: "100%"
  },
  headerItem: {
    margin: "10px",
    fontSize: 15,
    padding: "10px",
    whiteSpace: "nowrap",
    textDecoration: "none"
  }
};

const Header = () => (
  <React.Fragment>
    <Navbar bg="light" expand="lg" style={styles.header}>
      <Navbar.Brand>
        <Link to="/" style={styles.headerItem}>
          Research Kernel
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {routeList.map(headerItem => (
            <Navbar.Text>
              <Link to={`/${headerItem.route}`} style={styles.headerItem}>
                {headerItem.title}
              </Link>
            </Navbar.Text>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </React.Fragment>
);

export default Header;
