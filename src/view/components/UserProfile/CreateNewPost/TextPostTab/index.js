import React from "react";
import "./style.scss";
const userImg =
  "https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg";
export default () => (
  <div className="textPostTab">
    <div className="avatarCol">
      <img src={userImg} className="avatar" alt="Profile-Icon" />
    </div>
    <div className="postCol">
      <form>
        <textarea placeholder="What's on your mind?" />
      </form>
    </div>
  </div>
);
