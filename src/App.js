import React from "react";
import { Container } from "react-bootstrap";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/auth/login.component";
import Home from "./components/home/home.component";
import Papers from "./components/papers/papers.component";
import About from "./components/staticPages/about.component";
import "./index.css";
import { isLoggedIn } from "./_actions/auth.action";
import Community from "./components/staticPages/community.component";
import Team from "./components/staticPages/team.component";
import Header from "./components/header";

const App = () => (
  <React.Fragment>
    <Header />
    <Container>
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
          path="/papers"
          render={routerProps => {
            return isLoggedIn() ? (
              <Papers {...routerProps} />
            ) : (
              <Redirect to="/login" />
            );
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
        <Route
          exact
          path="/about"
          render={routerProps => {
            return <About {...routerProps} />;
          }}
        />
        <Route
          exact
          path="/community"
          render={routerProps => {
            return <Community {...routerProps} />;
          }}
        />
        <Route
          exact
          path="/team"
          render={routerProps => {
            return <Team {...routerProps} />;
          }}
        />
      </Switch>
    </Container>
  </React.Fragment>
);
export default App;
