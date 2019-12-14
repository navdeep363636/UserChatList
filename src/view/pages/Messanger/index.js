import React from "react";
import { UserList, ChatList, Profile } from "../../components/Messanger";
import styled from "styled-components";
export default () => (
  <Root>
    <UserListWrapper>
      <UserList />
    </UserListWrapper>
    <ChatListWrapper>
      <ChatList />
    </ChatListWrapper>
    <ProfileWrapper>
      <Profile />
    </ProfileWrapper>
  </Root>
);

const user = 284;
const profile = 271;
const Root = styled("div")`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;
const UserListWrapper = styled("div")`
  flex: 0 0 ${user}px;
  max-width: ${user}px;
  height: 100%;
`;
const ChatListWrapper = styled("div")`
  flex: 0 0 calc(100% - ${user + profile}px);
  max-width: calc(100% - ${user + profile}px);
  border-left: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
  height: 100%;
`;
const ProfileWrapper = styled("div")`
  flex: 0 0 ${profile}px;
  max-width: ${profile}px;
  height: 100%;
`;
