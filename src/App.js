import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home/home.component";
import Login from "./components/auth/login.component";
import { isLoggedIn } from "./_actions/auth.action";

import "antd/dist/antd.css";

import "./index.css";

const App = () => (
  <Switch>
    <Route
      path="/"
      render={routerProps => {
        return isLoggedIn() ? (
          <Home {...routerProps} />
        ) : (
          <Login {...routerProps} />
        );
      }}
    />
    <Route
      exact
      path="/login"
      render={routerProps => {
        return isLoggedIn() ? <Redirect to="/" /> : <Login {...routerProps} />;
      }}
    />
  </Switch>
);
export default App;
