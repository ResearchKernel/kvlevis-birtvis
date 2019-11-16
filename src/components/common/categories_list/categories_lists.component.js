import React, { Component } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./categories_list.css";
import { CATEGORIES } from "../static/categories";
import { getPapers } from "../../../_actions/papers.action";

@connect()
export default class PostsList extends Component {
  handleClick = e => {
    // ## dispatch to change header image
    const data = JSON.parse(e.target.getAttribute("data"));
    const payload = {
      primary_category: data.code,
      offset: 0,
      size: 10,
      start_date: "2015-01-01",
      end_date: "2018-12-31"
    };
    this.props.dispatch(getPapers(payload));
  };

  render() {
    return (
      <>
        <Row className="rk-categories" gutter={48}>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link to="/categories/astro-physics" onClick={this.handleClick}>
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[0].asset[786].url}
                data={JSON.stringify(CATEGORIES[0])}
              />
              <div className="cat-overlay dfffrnwjccaic">Astro Physics</div>
            </Link>
          </Col>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link to="/categories/condensed-matter" onClick={this.handleClick}>
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[1].asset[786].url}
                data={JSON.stringify(CATEGORIES[1])}
              />
              <div className="cat-overlay dfffrnwjccaic">Condensed Matter</div>
            </Link>
          </Col>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link to="/categories/computer-science" onClick={this.handleClick}>
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[2].asset[786].url}
                data={JSON.stringify(CATEGORIES[2])}
              />
              <div className="cat-overlay dfffrnwjccaic">Computer Science</div>
            </Link>
          </Col>
        </Row>
        <Row className="rk-categories mt10" gutter={48}>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link to="/categories/econometrics" onClick={this.handleClick}>
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[3].asset[786].url}
                data={JSON.stringify(CATEGORIES[3])}
              />
              <div className="cat-overlay dfffrnwjccaic">Econometrics</div>
            </Link>
          </Col>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link
              to="/categories/electrical-engineering-and-systems-science"
              onClick={this.handleClick}
            >
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[4].asset[786].url}
                data={JSON.stringify(CATEGORIES[4])}
              />
              <div className="cat-overlay dfffrnwjccaic">
                Electrical Engineering and Systems Science
              </div>
            </Link>
          </Col>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link
              to="/categories/general-relativity-and-quantum-cosmology"
              onClick={this.handleClick}
            >
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[5].asset[786].url}
                data={JSON.stringify(CATEGORIES[5])}
              />
              <div className="cat-overlay dfffrnwjccaic">
                General Relativity and Quantum Cosmology
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="rk-categories mt10" gutter={48}>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link
              to="/categories/high-energy-physics"
              onClick={this.handleClick}
            >
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[6].asset[786].url}
                data={JSON.stringify(CATEGORIES[6])}
              />
              <div className="cat-overlay dfffrnwjccaic">
                High Energy Physics
              </div>
            </Link>
          </Col>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link to="/categories/mathematics" onClick={this.handleClick}>
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[7].asset[786].url}
                data={JSON.stringify(CATEGORIES[7])}
              />
              <div className="cat-overlay dfffrnwjccaic">Mathematics</div>
            </Link>
          </Col>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link
              to="/categories/non-linear-sciences"
              onClick={this.handleClick}
            >
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[8].asset[786].url}
                data={JSON.stringify(CATEGORIES[8])}
              />
              <div className="cat-overlay dfffrnwjccaic">
                Nonlinear Sciences
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="rk-categories mt10" gutter={48}>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link to="/categories/nuclear" onClick={this.handleClick}>
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[9].asset[786].url}
                data={JSON.stringify(CATEGORIES[9])}
              />
              <div className="cat-overlay dfffrnwjccaic">Nuclear</div>
            </Link>
          </Col>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link to="/categories/physics" onClick={this.handleClick}>
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[10].asset[786].url}
                data={JSON.stringify(CATEGORIES[10])}
              />
              <div className="cat-overlay dfffrnwjccaic">Physics</div>
            </Link>
          </Col>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link
              to="/categories/quantitative-biology"
              onClick={this.handleClick}
            >
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[11].asset[786].url}
                data={JSON.stringify(CATEGORIES[11])}
              />
              <div className="cat-overlay dfffrnwjccaic">
                Quantitative Biology
              </div>
            </Link>
          </Col>
        </Row>
        <Row className="rk-categories mt10" gutter={48}>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link to="/categories/finance" onClick={this.handleClick}>
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[12].asset[786].url}
                data={JSON.stringify(CATEGORIES[12])}
              />
              <div className="cat-overlay dfffrnwjccaic">Finance</div>
            </Link>
          </Col>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link to="/categories/quantum-physics" onClick={this.handleClick}>
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[13].asset[786].url}
                data={JSON.stringify(CATEGORIES[13])}
              />
              <div className="cat-overlay dfffrnwjccaic">Quantum Physics</div>
            </Link>
          </Col>
          <Col className="mb10" md={8} sm={12} xs={24}>
            <Link to="/categories/statistics" onClick={this.handleClick}>
              <img
                className="m-card m-card-1a"
                src={CATEGORIES[14].asset[786].url}
                data={JSON.stringify(CATEGORIES[14])}
              />
              <div className="cat-overlay dfffrnwjccaic">Statistics</div>
            </Link>
          </Col>
        </Row>
      </>
    );
  }
}
