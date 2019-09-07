import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { routeList } from "../common/static/routes";
import "./header.component.css";
import { connect } from "react-redux";
import SearchBox from "../search/searchBox.component";

@connect(store => {
  return {
    searchVisible: store.searchVisible
  };
})
class Header extends Component {
  render() {
    const { isSearchVisible } = this.props.searchVisible.data;
    return (
      <React.Fragment>
        <Navbar bg="light" expand="lg" className="header-container">
          <Link to="/" className="header-item">
            <Navbar.Brand>Research Kernel</Navbar.Brand>
          </Link>
          <Navbar.Toggle />
          {!isSearchVisible && <SearchBox />}
          <Navbar.Collapse>
            <Nav>
              {routeList.map(headerItem => (
                <Link to={`/${headerItem.route}`} className="header-item">
                  <Navbar.Text>{headerItem.title}</Navbar.Text>
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
