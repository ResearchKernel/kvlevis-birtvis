import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home/home.component";
import Login from "./components/auth/login.component";
import { isLoggedIn } from "./_actions/auth.action";
import Posts from "./components/common/posts/posts.component";

import "./index.css";

const App = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={routerProps => {
        return <Home {...routerProps} />;
      }}
    />
    <Route
      path="/categories/:category"
      render={routerProps => {
        return <Posts {...routerProps} />;
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
