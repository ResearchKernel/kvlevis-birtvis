import React, { Component } from 'react';
import { Row, Col } from "antd";
import "./categories.css";

export default class Sidebar extends Component {
    render() {
        return (
            <>
                <Row className="rk-categories" gutter={48}>
                    <Col className="mb10" md={8} sm={12} xs={24}>
                        <img
                            className="m-card m-card-1a"
                            src="https://researchkernel-assets.s3.ap-south-1.amazonaws.com/assets/astrophysics-992.jpg"
                        />
                        <div className="cat-overlay dfffrnwjccaic">ASTRO PHYSICS</div>
                    </Col>
                    <Col className="mb10" md={8} sm={12} xs={24}>
                        <img
                            className="m-card m-card-1a"
                            src="https://researchkernel-assets.s3.ap-south-1.amazonaws.com/assets/maths-992.jpg"
                        />
                        <div className="cat-overlay dfffrnwjccaic">MATHEMATICS</div>
                    </Col>
                    <Col className="mb10" md={8} sm={12} xs={24}>
                        <img
                            className="m-card m-card-1a"
                            src="https://researchkernel-assets.s3.ap-south-1.amazonaws.com/assets/condensed-matter-992.jpg"
                        />
                        <div className="cat-overlay dfffrnwjccaic">CONDENSED MATTER</div>
                    </Col>
                </Row>
                <Row className="rk-categories mt10" gutter={48}>
                    <Col className="mb10" md={8} sm={12} xs={24}>
                        <img
                            className="m-card m-card-1a"
                            src="https://researchkernel-assets.s3.ap-south-1.amazonaws.com/assets/general-relativity-and-quantum-cosmology-992.jpg"
                        />
                        <div className="cat-overlay dfffrnwjccaic">GENERAL RELATIVITY AND QUANTUM COSMOLOGY</div>
                    </Col>
                    <Col className="mb10" md={8} sm={12} xs={24}>
                        <img
                            className="m-card m-card-1a"
                            src="https://researchkernel-assets.s3.ap-south-1.amazonaws.com/assets/biology-992.jpg"
                        />
                        <div className="cat-overlay dfffrnwjccaic">BIOLOGY</div>
                    </Col>
                    <Col className="mb10" md={8} sm={12} xs={24}>
                        <img
                            className="m-card m-card-1a"
                            src="https://researchkernel-assets.s3.ap-south-1.amazonaws.com/assets/nonlinear-sciences-992.jpg"
                        />
                        <div className="cat-overlay dfffrnwjccaic">NON LINEAR SCIENCES</div>
                    </Col>
                </Row>
                <Row className="rk-categories mt10" gutter={48}>
                    <Col className="mb10" md={8} sm={12} xs={24}>
                        <img
                            className="m-card m-card-1a"
                            src="https://researchkernel-assets.s3.ap-south-1.amazonaws.com/assets/astrophysics-992.jpg"
                        />
                        <div className="cat-overlay dfffrnwjccaic">GENERAL RELATIVITY AND QUANTUM COSMOLOGY</div>
                    </Col>
                    <Col className="mb10" md={8} sm={12} xs={24}>
                        <img
                            className="m-card m-card-1a"
                            src="https://researchkernel-assets.s3.ap-south-1.amazonaws.com/assets/astrophysics-992.jpg"
                        />
                        <div className="cat-overlay dfffrnwjccaic">GENERAL RELATIVITY AND QUANTUM COSMOLOGY</div>
                    </Col>
                    <Col className="mb10" md={8} sm={12} xs={24}>
                        <img
                            className="m-card m-card-1a"
                            src="https://researchkernel-assets.s3.ap-south-1.amazonaws.com/assets/astrophysics-992.jpg"
                        />
                        <div className="cat-overlay dfffrnwjccaic">GENERAL RELATIVITY AND QUANTUM COSMOLOGY</div>
                    </Col>
                </Row>
                <Row className="rk-categories mt10" gutter={48}>
                    <Col className="mb10" md={8} sm={12} xs={24}>
                        <img
                            className="m-card m-card-1a"
                            src="https://researchkernel-assets.s3.ap-south-1.amazonaws.com/assets/astrophysics-992.jpg"
                        />
                        <div className="cat-overlay dfffrnwjccaic">GENERAL RELATIVITY AND QUANTUM COSMOLOGY</div>
                    </Col>
                    <Col className="mb10" md={8} sm={12} xs={24}>
                        <img
                            className="m-card m-card-1a"
                            src="https://researchkernel-assets.s3.ap-south-1.amazonaws.com/assets/astrophysics-992.jpg"
                        />
                        <div className="cat-overlay dfffrnwjccaic">GENERAL RELATIVITY AND QUANTUM COSMOLOGY</div>
                    </Col>
                </Row>
            </>
        );
    }
}