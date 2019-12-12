import React from "react";
import "./style.scss";
import HoverSmilies from "../../HoverSmilies";
import styled, { css } from "styled-components";
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
          <p className="msg">
            <InconWrapper left={person === "sender"}>
              <HoverSmilies center>
                <i className="far fa-smile" />
              </HoverSmilies>
            </InconWrapper>
            {msg}
          </p>
        </div>
      );
    })}
  </div>
);
const InconWrapper = styled("i")`
  position: absolute;
  color: #999;
  ${({ left }) =>
    left
      ? css`
          right: 100%;
          padding-right: 6px;
        `
      : css`
          left: 100%;
          padding-left: 6px;
        `};
`;
