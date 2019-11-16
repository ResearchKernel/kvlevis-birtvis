import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import { Switch, Route } from "react-router-dom";
import Navbar from "../common/navbar/navbar.component";
import HeaderJumbo from "../common/header-jumbo/header-jumbo.component";
import { Container } from "react-bootstrap";
import Sidebar from "../common/sidebar/sidebar.component";
import CategoriesList from "../common/categories_list/categories_lists.component";
import "./home.css";

@connect(store => {
  return {
    headerImage: store.headerImage.url
  };
})
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerImage: ""
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.state.headerImage !== nextProps.headerImage) {
  //     this.setState({
  //       headerImage: nextProps.headerImage
  //     });
  //   }
  // }

  componentDidMount() {
    // ## default header image set
    this.setState({ headerImage: this.props.headerImage });
  }

  render() {
    const { headerImage } = this.state;
    return (
      <>
        <Row
          className="rk-header"
          style={{
            backgroundImage: `url(${headerImage})`
          }}
        >
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
              <Switch>
                <Route
                  exact
                  path="/"
                  render={routerProps => {
                    return <CategoriesList {...routerProps} />;
                  }}
                />
                <Route
                  path="/categories/:category"
                  render={routerProps => {
                    return <Posts {...routerProps} />;
                  }}
                />
              </Switch>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
