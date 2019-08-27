import React from "react";
import { Row, Col, Carousel, Table } from "react-bootstrap";

const about = () => {
  return (
    <>
      <Row>
        <Col md={{ span: 12, offset: 0 }}>Header Component</Col>
      </Row>
      <Row>
        <Col md={{ span: 9, offset: 2 }}>
          <h3>Our Vision</h3>
          <p>
            Our objective at ResearchKernel is to not only provide a platform
            for you to do a search but also make it interactive and relevant.
            With Contextual Search, we make the tedious task of searching easier
            only show what's relevant to you that save your time from going
            through unnecessary Search Results. We also provide Community Forum
            to find like-minded people that might become your collaborators for
            your project.
          </p>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ span: 12, offset: 0 }}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="" alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="" alt="Third slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ span: 9, offset: 2 }}>
          <h3>Personalised Recomendations, Daily Updates from Arxiv.org</h3>
          <p>
            As an open source project, we are focusing on only publicily
            available search papers. We have started from Arxiv.org that is one
            of the largest free research paper proverder out there. We are
            harvesting all the research paper arxiv has in there database from
            1999 till date, however we are not limited to arxiv databse, we will
            also incoporate other domains databses too in future.
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={{ span: 12, offset: 0 }}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="" alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="" alt="Third slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="" alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <br />
      <p>
        <Col md={{ span: 9, offset: 2 }}>
          <h3>Domains at ResearchKernel</h3>
          <Table hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>CATEGORY</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </p>
    </>
  );
};

export default about;
