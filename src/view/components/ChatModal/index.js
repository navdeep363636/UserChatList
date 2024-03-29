import React from "react";
import "./style.scss";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
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
    <button>
      <i className="fas fa-video" />
    </button>
    <button>
      <i className="fas fa-phone-alt" />
    </button>
    <button>
      <i className="fas fa-cog" />
    </button>
    <button>
      <i className="fas fa-times" onClick={() => props.openUserChat(false)} />
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
