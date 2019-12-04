import React from "react";
import "./style.scss";
const chatMock = [
  {
    person: "sender",
    msg: "Lorem f ngrketk Lorem "
  },
  {
    person: "reciver",
    msg: "Lorem Lvofdgo4orem "
  },
  {
    person: "sender",
    msg: "Lorem Lorem "
  },
  {
    person: "reciver",
    msg: "Loremkve e Lorem Loremkve e Lorem Loremkve e Lorem Loremkve e Lorem "
  },
  {
    person: "sender",
    msg: "Lorem Lorem "
  },
  {
    person: "reciver",
    msg: "Lorem Lorem "
  },
  {
    person: "sender",
    msg: "Lorem Lorem "
  },
  {
    person: "reciver",
    msg: "Lorem Lorem "
  },
  {
    person: "sender",
    msg: "Lorem Lorem "
  },
  {
    person: "reciver",
    msg: "Lorem Lorem "
  },
  {
    person: "sender",
    msg: "Lorem Lorem "
  },
  {
    person: "reciver",
    msg: "Lorem Lorem "
  }
];
export default () => (
  <div className="chats-list">
    {chatMock.map(({ person, msg }, index) => {
      const className = `chat-msg ${person}`;
      return (
        <div key={index} className={className}>
          <p className="msg">{msg}</p>
        </div>
      );
    })}
  </div>
);
