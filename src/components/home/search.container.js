import React, { Component } from "react";
import "./home.component.css";

class SearchContainer extends Component {
  render() {
    return (
      <section
        className="site-hero overlay"
        style={{
          background:
            "linear-gradient(60deg,rgba(84, 58, 183, 1) 0%,rgba(0, 172, 193, 1) 100%)"
        }}
      >
        <div className="container">
          <div className="row align-items-center site-hero-inner justify-content-center">
            <div className="col-md-8 text-center">
              <div className="mb-5 element-animate">
                <h1>Search Papers</h1>
                <p>
                  Open access to 1,590,010 e-prints in the fields of physics,
                  mathematics, computer science, quantitative biology,
                  quantitative finance, statistics, electrical engineering and
                  systems science, and economics.
                </p>
              </div>

              <form className="form-inline" id="search-form">
                <input
                  type="text"
                  className="form-control form-control-block search-input"
                  id="autocomplete"
                  placeholder="Search Papers by Title, Author(s), Abstract..."
                />
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchContainer;
