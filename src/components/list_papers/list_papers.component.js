import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./list_papers.css";
import { connect } from "react-redux";
import { getPapers } from "../../_actions/papers.action";
import { REVERSE_CATEGORIES_MAP } from "../common/static/categories";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

@connect(store => {
  return {
    papers: store.papers.data
  };
})
class ListPapers extends Component {
  state = {
    papers: [],
    loading: false,
    prevY: 0,
    offset: 1,
    payload: {
      size: 10,
      start_date: "2015-01-01",
      end_date: "2018-12-31",
      primary_category: ""
    }
  };

  componentDidMount() {
    const path = this.props.location.pathname.split("/")[2];
    this.getPapers({
      ...this.state.payload,
      offset: this.state.offset,
      primary_category: REVERSE_CATEGORIES_MAP[path].code
    });
    this.setState({
      payload: {
        ...this.state.payload,
        primary_category: REVERSE_CATEGORIES_MAP[path].code
      }
    });
    // Options
    var options = {
      root: null, // Page as root
      rootMargin: "0px",
      threshold: 1.0
    };
    // Create an observer
    this.observer = new IntersectionObserver(
      this.handleObserver, //callback
      options
    );
    //Observ the `loadingRef`
    this.observer.observe(this.loadingRef);
  }

  handleObserver = (entities, observer) => {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const currentOffset = this.state.offset;
      const payload = {
        ...this.state.payload,
        offset: currentOffset + 1
      };
      this.getPapers(payload);
      this.setState({ offset: currentOffset + 1 });
    }
    this.setState({ prevY: y });
  };

  getPapers = payload => {
    this.setState({ loading: true });
    this.props.dispatch(getPapers(payload)).then(res => {
      const data = res.value.data.result;
      this.setState({
        papers: [...this.state.papers, ...data],
        loading: false
      });
    });
  };

  render() {
    const { papers } = this.state;
    const loadingCSS = {
      height: "100px",
      margin: "30px"
    };
    const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
    const postsList = papers.map((item, index) => {
      const dat = item.abstract.split(" ");
      return (
        <div className="m-card m-card-2 mt10 pd10" key={index}>
          <Row key={index}>
            <Col md={9}>
              <h5 className="postHeading">{item.title}</h5>
              <div className="postMetadata">
                <div className="postPublishedDate">{item.updated}</div>
                <div className="postAuthors">{item.authors.join(", ")}</div>
                <div className="postAbstract">
                  {dat.splice(0, 40).join(" ") + "......"}
                </div>
              </div>
            </Col>
            <Col md={3}>Links</Col>
          </Row>
        </div>
      );
    });
    return (
      <>
        {postsList}
        <div
          ref={loadingRef => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </>
    );
  }
}

export default ListPapers;
