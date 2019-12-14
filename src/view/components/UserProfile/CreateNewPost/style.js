import styled from "styled-components";

export const Root = styled("div")`
  position: relative;
  z-index: 99;
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
