import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SearchContainer from "../search/search.component";
import "./home.component.css";

class Home extends React.Component {
  render() {
    return (
      <>
        {/* <SearchContainer /> */}
        <div style={{ height: "5000px" }}>
          <section
            className="site-hero overlay"
            data-stellar-background-ratio="0.5"
            style={{
              background:
                "linear-gradient(60deg,rgba(84, 58, 183, 1) 0%,rgba(0, 172, 193, 1) 100%)"
            }}
          >
            <div
            className="container"
            >
              <div
              className="row align-items-center site-hero-inner justify-content-center"
              >
                <div
                className="col-md-8 text-center"
                >
                  <div
                  className="mb-5 element-animate"
                  >
                    <h1>Find your perfect place.</h1>
                    <p>
                      Discover &amp; connect with great places around the world.
                    </p>
                  </div>

                  <form
                    // className="form-inline element-animate"
                    id="search-form"
                  >
                    <label
                      for="s"
                      className="sr-only"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-block search-input"
                      id="autocomplete"
                      placeholder="Search Location with Google Search API"
                      // onFocus="geolocate()"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Home;
