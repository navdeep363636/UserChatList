import React, { Component } from "react";
import ChatModal from "../../ChatModal";
import UserCard from "../../UserCard";
import "./style.scss";
import userList from "./userList";
export default class App extends Component {
  state = {};
  openUserChat = val => {
    this.setState({ openChatBox: val });
  };
  render() {
    const { openChatBox } = this.state;
    return (
      <>
        <div className="user-card-wrapper">
          {userList.map((data, index) => (
            <UserCard key={index} {...data} openUserChat={this.openUserChat} />
          ))}
        </div>

        {openChatBox && <ChatModal openUserChat={this.openUserChat} />}
      </>
    );
  }
}
