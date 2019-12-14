import React from "react";
import styled, { css } from "styled-components";
export default () => (
  <div className="text-center" style={{ padding: "30px 12px" }}>
    <Profile src="https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg" />
    <Name>Razat Verma</Name>
    <TimeAgo>Active 1H ago</TimeAgo>
  </div>
);

const Profile = styled("img")`
  width: 1em;
  height: 1em;
  font-size: 100px;
  border-radius: 100%;
  object-fit: cover;
  margin-right: 12px;
`;

const Name = styled("h2")`
  margin-top: 12px;
  margin-bottom: 0;
`;

const TimeAgo = styled("p")`
  font-size: 14px;
  margin: 0;
`;
