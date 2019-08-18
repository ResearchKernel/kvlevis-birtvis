import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./renderPosts.css";

class RenderPosts extends Component {
  state = {
    posts: [
      {
        authors: "Tushar Mudgal, Prakritidev Verma",
        publishedDate: new Date().toLocaleDateString(),
        heading: "Deep Learning and Neural Networks Classification techniques"
      },
      {
        authors: "Tushar Mudgal, Prakritidev Verma",
        publishedDate: new Date().toLocaleDateString(),
        heading: "Kafka at Production, with security auditing techniques"
      },
      {
        authors: "Tushar Mudgal, Prakritidev Verma",
        publishedDate: new Date().toLocaleDateString(),
        heading: "Kafka scaling"
      },
      {
        authors: "Tushar Mudgal, Prakritidev Verma",
        publishedDate: new Date().toLocaleDateString(),
        heading: "JavaScript design patterns"
      },
      {
        authors: "Tushar Mudgal, Prakritidev Verma",
        publishedDate: new Date().toLocaleDateString(),
        heading: "Java Design patterns"
      },
      {
        authors: "Tushar Mudgal, Prakritidev Verma",
        publishedDate: new Date().toLocaleDateString(),
        heading: "Deep Learning and Neural Networks Classification techniques"
      },
      {
        authors: "Tushar Mudgal, Prakritidev Verma",
        publishedDate: new Date().toLocaleDateString(),
        heading: "Kafka at Production, with security auditing techniques"
      },
      {
        authors: "Tushar Mudgal, Prakritidev Verma",
        publishedDate: new Date().toLocaleDateString(),
        heading: "Kafka scaling"
      },
      {
        authors: "Tushar Mudgal, Prakritidev Verma",
        publishedDate: new Date().toLocaleDateString(),
        heading: "JavaScript design patterns"
      },
      {
        authors: "Tushar Mudgal, Prakritidev Verma",
        publishedDate: new Date().toLocaleDateString(),
        heading: "Java Design patterns"
      }
    ]
  };
  render() {
    const { posts } = this.state;
    const postsList = posts.map((item, index) => {
      return (
        <Row key={index}>
          <Col md={12}>
            <div className="m-card m-card-2">
              <Row>
                <Col md={9}>
                  <h5 className="postHeading">{item.heading}</h5>
                  <div className="postMetadata">
                    <div className="postPublishedDate">
                      {item.publishedDate}
                    </div>
                    <div className="postAuthors">{item.authors}</div>
                  </div>
                </Col>
                <Col md={3}>Links</Col>
              </Row>
            </div>
          </Col>
        </Row>
      );
    });
    return <>{postsList}</>;
  }
}

export default RenderPosts;
