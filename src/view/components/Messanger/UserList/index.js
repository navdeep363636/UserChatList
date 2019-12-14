import React from "react";
import styled, { css } from "styled-components";
import userMock from "./userMock";
export default () => (
  <Root>
    <ChatHeader>
      <Profile
        size={40}
        src="https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg"
      />
      <h2>Chats</h2>
    </ChatHeader>
    {userMock.map(
      ({ lastMsg = "", lastIcon = false, timeAgo, byYou = false }, index) => (
        <UserWrapper key={index} active={index === 0}>
          <Profile src="https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg" />
          <div>
            <h2>Razat Verma</h2>
            <p>
              {byYou && "You: "}
              {lastIcon ? <img src={lastIcon} alt="" /> : lastMsg} . {timeAgo}
            </p>
          </div>
        </UserWrapper>
      )
    )}
  </Root>
);

const Root = styled("div")`
  padding: 0 8px;
`;
const ChatHeader = styled("div")`
  padding: 0 8px;
  border-bottom: 1px solid #d2d2d2;
  margin-bottom: 12px;
  height: 64px;
  background: white;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 999;
`;
const UserWrapper = styled("div")`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 8px;
  height: 64px;
  border-radius: 10px;
  ${({ active }) =>
    active &&
    css`
      background-color: rgba(0, 0, 0, 0.05);
    `};
  h2 {
    font-size: 15px;
    margin: 0;
    font-weight: 500;
  }
  p {
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 14px;
    img {
      height: 14px;
    }
  }
`;
const Profile = styled("img")`
  width: 1em;
  height: 1em;
  font-size: ${({ size }) => size || 50}px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 12px;
`;
