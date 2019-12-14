import styled, { css } from "styled-components";

export const Drop = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.6;
  z-index: 999999998;
`;
export const Root = styled("div")`
  position: relative;
  ${({ active }) =>
    active &&
    css`
      z-index: 999999999;
      box-shadow: -3px 0px 0 14px #fff;
      background: #fff;
    `};
  .createPostBtn {
    display: flex;
    align-items: center;

    button {
      margin-right: 5px;
      background: transparent;
      border: 0;
      font-weight: 700;
      i {
        margin-right: 5px;
      }
    }
  }
  .tab {
    width: 400px;
    display: flex;
    align-items: center;
  }
`;
