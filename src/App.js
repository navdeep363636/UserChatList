import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./view/components/layout";
import User from "./view/pages/User";
import ProfileBlock from "./view/pages/ProfileBlock";


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
            <Switch>
              <Route path="/user" component={User} />
              <Route path="/profileimage" component={ProfileBlock} />
            </Switch>
          </Layout>
        </Router>
      </>
    );
  }
}
