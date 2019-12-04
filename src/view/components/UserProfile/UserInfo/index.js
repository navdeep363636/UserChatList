import React from "react";
import "./style.scss";
import UserShareDropdown from "./UserShareDropdown";

export default () => (
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
      <p>Lorem ispume thso fjd fjgn defgfner</p>
      <p>spume thr</p>
      <p>Lorem ispume ther</p>
    </div>
  </div>
);
