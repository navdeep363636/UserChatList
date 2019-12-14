import React from "react";
import styled from "styled-components";
export default ({ active = false, children }) =>
  active ? (
    <Root>
      {children}
      <DropDownWrapper>
        <DropDownContainer>
          <li>
            <Button>
              <i class="fas fa-check"></i>
              <b>Get Notifications</b>
            </Button>
          </li>
          <hr />
          <li>
            <Button>Close friends</Button>
          </li>
          <li>
            <Button>Acquaintances</Button>
          </li>
          <li>
            <Button>Add to another list...</Button>
          </li>
          <hr />
          <li>
            <Button>Cancle request</Button>
          </li>
        </DropDownContainer>
      </DropDownWrapper>
    </Root>
  ) : (
    children
  );
const Button = styled("button")`
  background: transparent;
  border: 0;
  width: 100%;
  text-align: left;
  font-size: 12px;
  padding: 2px 30px;
  white-space: nowrap;
  position: relative;
  &:hover {
    background: #0099ff;
    color: #fff;
  }
  i {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const DropDownWrapper = styled("div")`
  position: absolute;
  top: 100%;
  left: 0;
  padding-top: 8px;
`;
const DropDownContainer = styled("ul")`
  padding: 8px 4px;
  margin: 0;
  background: #fff;
  width: 200px;
  border: 1px solid rgba(0, 0, 0, 0.45);
  border-bottom: 1px solid #666;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  li {
    display: flex;
    align-items: center;
    list-style: none;
  }
  hr {
    border: 0;
    border-bottom: 1px solid #a7a7a7;
  }
`;
const Root = styled("div")`
  position: relative;
  &:not(:hover) {
    ${DropDownWrapper} {
      display: none;
    }
  }
`;
