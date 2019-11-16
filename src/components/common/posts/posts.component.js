import React, { Component } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import Navbar from "../navbar/navbar.component";
import HeaderJumbo from "../header-jumbo/header-jumbo.component";
import { Container } from "react-bootstrap";
import Sidebar from "../sidebar/sidebar.component";
import ListPapers from "../../list_papers/list_papers.component";

@connect(store => {
  return {
    headerImage: store.headerImage.url,
    papers: store.papers
  };
})
export default class Posts extends Component {
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
    // this.setState({ headerImage: this.props.headerImage });
  }
  render() {
    const { headerImage } = this.props;
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
              {this.props.location.pathname.split("/")[2]}
              {/* ## Posts */}
              <ListPapers papers={this.props.papers} {...this.props} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
