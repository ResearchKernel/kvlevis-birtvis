import React, { Component } from "react";
import { Row, Col, Accordion, Card, Button } from "react-bootstrap";
import FilterBy from "./../../selector/filterBy.component";
import { YEARS } from "./../../common/static/years";

import "./sidebar.css";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <>
        <Row>
          <Col md={12}>Filters</Col>
        </Row>
        <Row className="filterAccordian">
          <Col md={12}>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Click me!
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className="filterBy">
                    <FilterBy list={YEARS} />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </>
    );
  }
}

export default Sidebar;
