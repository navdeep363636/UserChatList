import React from "react";
import NewsSidebar from "./NewsSidebar";
import UsersSidebar from "./UsersSidebar";
import { withRouter } from "react-router-dom";

import "./style.scss";
export default withRouter(({ children, location }) => {
  if (location.pathname === "/call") {
    return children;
  }
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
});
