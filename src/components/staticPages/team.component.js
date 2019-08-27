import React from "react";
import { Row, Col, CardDeck, ListGroup, Card } from "react-bootstrap";

const team = () => {
  return (
    <>
      <Row>
        <Col md={{ span: 12, offset: 0 }}>Header Component</Col>
      </Row>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h3>What are we solving at Researchkernel? </h3>
          <p>
            At Researchkernel we have a small team working in big ideas and
            developemnt challenges in Cloud Deployment, System Archicture,
            Machine Learning, Data Science and DevOps Domains. We all are
            working professionals, working on this project part-time. If you
            have the skills, have interest in any domain that we are working on
            and want to be a part of this project, connect with us on Linkedin,
            Github, Mail or checkout out Join Us section.
          </p>
        </Col>
        <br />
        <Row>
          <Col>
            <CardDeck>
              <Card border="dark">
                <Card.Img
                  variant="top"
                  src="https://media.licdn.com/dms/image/C5103AQEwNp5wuqWmWQ/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=EyQoYRkeinGNj5pEbn9Y2XhjsDQBtpJpb6y--Nl22IA"
                />
                <Card.Body>
                  <Card.Title>
                    <h6>Prakritidev Verma</h6>
                  </Card.Title>
                  <Card.Text>
                    <Col>
                      He started researchkernel in Mar 2018 currently
                      responsible for designing Contextual Search Engine
                      Recommendation Engine AWS Cloud Architecture and
                      Deployment Kubernetes with Docker.
                    </Col>
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Col md={{ span: 12, offset: 2 }}>
                    <Card.Link href="https://www.linkedin.com/in/prakritidevverma">
                      LinkedIn
                    </Card.Link>
                    <Card.Link href="https://github.com/prakritidev">
                      Github
                    </Card.Link>
                  </Col>
                </Card.Body>
              </Card>
              <Card border="dark">
                <Card.Img
                  variant="top"
                  src="https://media.licdn.com/dms/image/C5103AQHzGKS49lcoqA/profile-displayphoto-shrink_800_800/0?e=1565222400&v=beta&t=BAqezEJAEAWJdH95LIFhFJu4h-XX1SgXRwHXTRSpeak"
                />
                <Card.Body>
                  <Card.Title>
                    <h6>Tushar Mudgal</h6>
                  </Card.Title>
                  <Card.Text>
                    <Col>
                      He started as a collaborator in June 2018, currently
                      responsible for Node.js backend services, Docker
                      Deployments, Data Pipelines, Kafka Architecture Designing
                      and Deployment on AWS.
                    </Col>
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Col md={{ span: 12, offset: 2 }}>
                    <Card.Link href="https://www.linkedin.com/in/tusharmudgal3">
                      LinkedIn
                    </Card.Link>
                    <Card.Link href="https://github.com/mr-woot">
                      Github
                    </Card.Link>
                  </Col>
                </Card.Body>
              </Card>
              <Card border="dark">
                <Card.Img
                  variant="top"
                  src="https://media.licdn.com/dms/image/C5603AQH2tH2jwN0RXg/profile-displayphoto-shrink_800_800/0?e=1571875200&v=beta&t=cOJ24ZwkC7s90R74WTXW5TgaKZrWgJg1I6Qa5yMZEps"
                />
                <Card.Body>
                  <Card.Title>
                    <h6>Amit Kushwaha</h6>
                  </Card.Title>
                  <Card.Text>
                    <Col>
                      He started as a collaborator in June 2018, currenly
                      holding responsibility for Designing and Developing UI/UX
                      of the platfrom on React.js using redux and Ant Desing
                      Framework.
                    </Col>
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Col md={{ span: 12, offset: 2 }}>
                    <Card.Link href="https://www.linkedin.com/in/amit-kushwaha-755704106">
                      LinkedIn
                    </Card.Link>
                    <Card.Link href="https://github.com/devilcrucifier">
                      Github
                    </Card.Link>
                  </Col>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
        <br />
      </Row>
      <br />
    </>
  );
};

export default team;
