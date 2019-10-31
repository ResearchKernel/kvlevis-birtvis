import React from "react";
import { connect } from "react-redux";
import { login } from "./../../_actions/auth.action";
import { Form, Row, Button, Col } from "react-bootstrap";
import "./login.css";

@connect(store => {
  return {
    login: store.login
  };
})
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    // Action dispatch to login, if success go to '/' route
    // else throw notification banner
    this.props
      .dispatch(
        login({ email: this.state.email, password: this.state.password })
      )
      .then(() => {
        this.props.history.push("/kafka/producers");
        // ## data.
      })
      .catch(() => {});
  };

  handleEmailChange = e => {
    const { value } = e.target;
    // ## Email validation
    this.setState({ email: value });
  };

  handlePasswordChange = e => {
    const { value } = e.target;
    // ## Password validation
    this.setState({ password: value });
  };

  render() {
    return (
      <Form className="form-signin" onSubmit={this.handleSubmit}>
        <Row className="justify-center-md-center">
          <Col md={12}>
            <h1 className="text-center" style={{ padding: 10 }}>
              ResearchKernel
            </h1>
          </Col>
        </Row>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={this.handleEmailChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Login;
