import React, { useState } from "react";
import styled from "styled-components";
export default () => {
  const [microphone, setMicrophone] = useState(true);
  const [video, setVideo] = useState(true);

  return (
    <Root>
      <div></div>
      <div></div>
      <CallButtonsWrapper>
        <CallButtons onClick={() => setMicrophone(!microphone)}>
          <i
            style={{ opacity: microphone ? 1 : 0.5 }}
            className={`fas ${
              microphone ? "fa-microphone" : "fa-microphone-slash"
            }`}
          ></i>
        </CallButtons>
        <CallButtons onClick={() => setVideo(!video)}>
          <i
            style={{ opacity: video ? 1 : 0.5 }}
            className={`fas ${video ? "fa-video" : "fa-video-slash"}`}
          ></i>
        </CallButtons>
        <CallButtons call>
          <i class="fas fa-phone-alt"></i>
        </CallButtons>
      </CallButtonsWrapper>
    </Root>
  );
};

const Root = styled("div")`
  background: #000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;

const CallButtonsWrapper = styled("div")`
  display: flex;
  justify-content: center;
`;
const CallButtons = styled("button")`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  font-size: 20px;
  border: 0;
  margin: 0 6px;
  background: ${({ call }) => (call ? "#fe443f" : "#333333")};
  color: #fff;
`;
