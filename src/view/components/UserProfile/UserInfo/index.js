import React from "react";
import "./style.scss";
import UserShareDropdown from "./UserShareDropdown";

export default props => (
	<div className="UserInfo">
		<div className="userProfile">
			<img
				className="userImg"
				src="https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg"
				alt="user"
			/>
			<div className="userInfo">
				<h2 className="userName">Mr User</h2>
				<div className="d-flex align-items-center">
					<p className="timeAgo">29min Ago</p>
					<UserShareDropdown />
				</div>
			</div>
		</div>
		<div className="content">
			<p>{props.postMessage.first}</p>
			<p>{props.postMessage.second}</p>
			<p>{props.postMessage.third}</p>
		</div>
	</div>
);
