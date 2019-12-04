import React from "react";
import NewsSidebar from "./NewsSidebar";
import UsersSidebar from "./UsersSidebar";

import "./style.scss";
export default ({ children }) => {
	return (
		<div className="layout">
			<div className="NewsSidebarWrapper">
				<NewsSidebar />
			</div>
			<div className="main">
				<div className="mainContent">{children}</div>
			</div>
			<div className="UsersSidebarWrapper">
				<UsersSidebar />
			</div>
		</div>
	);
};
