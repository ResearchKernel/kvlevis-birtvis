import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home/home.component";
import Login from "./components/auth/login.component";
import { isLoggedIn } from "./_actions/auth.action";
import { Container } from "react-bootstrap";

import 'antd/dist/antd.css';

import "./index.css";

const App = () => (
  // <Container>
    <Switch>
      <Route
        exact
        path="/"
        render={routerProps => {
          return <Home {...routerProps} />;
        }}
      />
      <Route
        exact
        path="/login"
        render={routerProps => {
          return isLoggedIn() ? (
            <Redirect to="/" />
          ) : (
            <Login {...routerProps} />
          );
        }}
      />
    </Switch>
  // </Container>
);
export default App;
