import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./view/components/layout";
import User from "./view/pages/User";
import ProfileBlock from "./view/pages/ProfileBlock";
import {
	Advertise,
	Categories,
	Donation,
	Locker,
	Settings,
	Shortener,
	Wallet,
	Store,
	Tmp
} from "./view/pages/SideTabs";

/* Renders the white card wrapper for users list*/
export default class App extends Component {
	render() {
		return (
			<>
				<Router>
					<Layout>
						<Route exact path="/" component={() => (window.location.href = "/user")} />
						<Switch>
							<Route path="/user" component={User} />
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
						</Switch>
					</Layout>
				</Router>
			</>
		);
	}
}
