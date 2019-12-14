import React from "react";
import { UserList, ChatList, Profile } from "../../components/Messanger";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default () => (
  <Root>
    <UserListWrapper>
      <UserList />
    </UserListWrapper>
    <PersonWrapper>
      <PersonHeader>
        <div className="d-flex align-items-center">
          <ProfileImage
            size={40}
            src="https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg"
          />
          <h2>Navdeep</h2>
        </div>
        <div className="chat-header-options">
          <Link to="/call" target="_blank">
            <i className="fas fa-video" />
          </Link>
          <Link to="/call" target="_blank">
            <i className="fas fa-phone-alt" />
          </Link>
          <Link to="/user">
            <i className="fas fa-times" />
          </Link>
        </div>
      </PersonHeader>
      <ChatListWrapper>
        <ChatList />
      </ChatListWrapper>
      <ProfileWrapper>
        <Profile />
      </ProfileWrapper>
    </PersonWrapper>
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
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const PersonHeader = styled("div")`
  flex: 0 0 100%;
  max-width: 100%;
  padding: 0 8px;
  border-bottom: 1px solid #d2d2d2;
  height: 64px;
  background: white;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
`;
const ProfileImage = styled("img")`
  width: 1em;
  height: 1em;
  font-size: 40px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 12px;
`;

const PersonWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 calc(100% - ${user}px);
  max-width: calc(100% - ${user}px);
  border-left: 1px solid #d2d2d2;
  border-right: 1px solid #d2d2d2;
`;
const ChatListWrapper = styled("div")`
  flex: 0 0 calc(100% - ${profile}px);
  max-width: calc(100% - ${profile}px);
  border-right: 1px solid #d2d2d2;
  height: 100%;
`;
const ProfileWrapper = styled("div")`
  flex: 0 0 ${profile}px;
  max-width: ${profile}px;
  height: 100%;
`;
