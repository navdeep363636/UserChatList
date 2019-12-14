import React from "react";
import Chat from "../../ChatModal/Chat";
import ChatInput from "../../ChatModal/ChatInput";
export default () => (
  <div>
    <div style={{ height: "calc(100vh - 62px)", overflow: "auto" }}>
      <Chat />
    </div>
    <div style={{ height: 62 }}>
      <ChatInput />
    </div>
  </div>
);
