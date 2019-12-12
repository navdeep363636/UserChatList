import React from "react";
import { Smilies } from "../../../shared/sharedArray";
import styled from "styled-components";

export default ({ children }) => (
  <Root>
    {children}
    <IconWrapper>
      <IconContainer>
        {Smilies.map(({ icon }, index) => (
          <IconButton key={index}>
            <img src={icon} alt="" />
          </IconButton>
        ))}
      </IconContainer>
    </IconWrapper>
  </Root>
);
const IconWrapper = styled("div")`
  position: absolute;
  background: #fff;
  padding: 4px 4px;
  bottom: 100%;
  box-shadow: 0 0 3px 0 #9b9b9b;
  border-radius: 6px;
`;
const Root = styled("div")`
  position: relative;

  &:not(:hover) {
    ${IconWrapper} {
      display: none;
    }
  }
`;

const IconContainer = styled("div")`
  display: flex;
  align-items: center;
`;
const IconButton = styled("button")`
  background: transparent;
  border: 0;
  padding: 0;
  margin: 0 4px;
  &:hover {
    img {
      transform: scale(1.2);
    }
  }
  img {
    height: 18px;
  }
`;
