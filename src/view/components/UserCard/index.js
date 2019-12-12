import React from "react";
import "./UserCard.css";
/* Renders the each users in chat list*/
export default props => (
  <div className="user-card" onClick={() => props.openUserChat(true)}>
    <img
      className="user-img"
      src="https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg"
      alt="user"
    ></img>
    <div className="user-info">
      <h2 className="user-name">Mr User</h2>
    </div>
  </div>
);
