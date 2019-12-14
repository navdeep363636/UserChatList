import React from "react";
import styled, { css } from "styled-components";
import userMock from "./userMock";
export default () => (
  <Root>
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
  font-size: 50px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 12px;
`;
