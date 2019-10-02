import React from "react";
import { Row, Col, Carousel, Table } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <div style={{ paddingTop: "150px" }}>
      <section className="about">
        <div className="section-heading text-center">
          <h2>Our Vision</h2>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="row">
              <div className="col-sm-6">
                <div className="single-about-txt">
                  <h3>
                    Our objective at ResearchKernel is to not only provide a
                    platform for you to do a search but also make it interactive
                    and relevant. With Contextual Search, we make the tedious
                    task of searching easier only show what's relevant to you
                    that save your time from going through unnecessary Search
                    Results. We also provide Community Forum to find like-minded
                    people that might become your collaborators for your
                    project.
                  </h3>
                  <p>
                    As an open source project, we are focusing on only publicily
                    available search papers. We have started from Arxiv.org that
                    is one of the largest free research paper proverder out
                    there. We are harvesting all the research paper arxiv has in
                    there database from 1999 till date, however we are not
                    limited to arxiv databse, we will also incoporate other
                    domains databses too in future.
                  </p>
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>phone</h3>
                        <p>999999999</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>email</h3>
                        <p></p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="single-about-add-info">
                        <h3>LinkedIn</h3>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
