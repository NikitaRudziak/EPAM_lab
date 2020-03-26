import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from './redux/reducers/index'

import App from "./modules/App/App";
import Login from "./components/Login/Login";
import { Profile } from "./components/Profile";

import "./index.css";

const testStore = createStore(reducers);

ReactDOM.render(
  <Provider store={testStore}>
    <Router>
      <Route path="/cards" component={App} />
      <Route path="/login" component={Login} />
      <Redirect to="/login" />
      <Route path="/profile" component={Profile} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
