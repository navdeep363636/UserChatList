import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./view/components/layout";
import User from "./view/pages/User";

/* Renders the white card wrapper for users list*/
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Layout>
            <Route
              exact
              path="/"
              component={() => (window.location.href = "/user")}
            />
            <Route path="/user" component={User} />
          </Layout>
        </Router>
      </>
    );
  }
}
