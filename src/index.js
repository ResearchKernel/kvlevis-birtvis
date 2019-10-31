import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { message } from "antd";

message.config({
  top: 10,
  duration: 2,
  maxCount: 3
});

// import axios from "axios";
// axios.defaults.headers.common["Content-Type"] = "application/json";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);

// module.hot.accept();
