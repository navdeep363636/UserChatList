import React from "react";
import "./style.scss";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import { Link } from "react-router-dom";
const User = () => (
  <div className="user">
    <img
      className="user-img"
      src="https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg"
      alt="user"
    ></img>

    <h2 className="user-name">Mr User</h2>
  </div>
);
const HeaderOptions = props => (
  <div className="chat-header-options">
    <Link to="/call" target="_blank">
      <i className="fas fa-video" />
    </Link>
    <Link to="/call" target="_blank">
      <i className="fas fa-phone-alt" />
    </Link>
    <button onClick={() => props.openUserChat(false)}>
      <i className="fas fa-times" />
    </button>
  </div>
);
export default props => (
  <div className="chat-container">
    <div className="header">
      <User />
      <HeaderOptions {...props} />
    </div>
    <div className="chat-list-container">
      <Chat />
    </div>
    <div className="chat-input-container">
      <ChatInput />
    </div>
  </div>
);
