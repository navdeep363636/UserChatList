import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./view/components/layout";
import User from "./view/pages/User";
import ProfileBlock from "./view/pages/ProfileBlock";
import Call from "./view/pages/Call";
import FriendRequests from "./view/pages/FriendRequests";
import MessangerPage from "./view/pages/Messanger";
import {
  Advertise,
  Categories,
  Donation,
  Locker,
  Settings,
  Shortener,
  Wallet,
  Store,
  Tmp,
  Notification,
  Messanger,
  Email
} from "./view/pages/SideTabs";

/* Renders the white card wrapper for users list*/
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/messages" component={MessangerPage} />
            <Route
              exact
              path="/"
              component={() => (window.location.href = "/user")}
            />
            <Layout>
              <Route path="/user" component={User} />
              <Route path="/friend-requests" component={FriendRequests} />
              <Route path="/call" component={Call} />

              <Route path="/profileimage" component={ProfileBlock} />
              <Route path="/advertise" component={Advertise} />
              <Route path="/categories" component={Categories} />
              <Route path="/donation" component={Donation} />
              <Route path="/locker" component={Locker} />
              <Route path="/settings" component={Settings} />
              <Route path="/shortener" component={Shortener} />
              <Route path="/store" component={Store} />
              <Route path="/tmp" component={Tmp} />
              <Route path="/wallet" component={Wallet} />
              <Route path="/notification" component={Notification} />
              <Route path="/messanger" component={Messanger} />
              <Route path="/email" component={Email} />
            </Layout>
          </Switch>
        </Router>
      </>
    );
  }
}
