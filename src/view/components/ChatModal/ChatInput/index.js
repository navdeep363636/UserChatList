import React, { useState } from "react";
import "./style.scss";

export default () => {
  const [msgInput, setMsgInput] = useState("");
  function handleInput(e) {
    setMsgInput(e.target.value);
  }

  return (
    <div className="chat-inputs">
      <input
        className="chat-input"
        name="msgInput"
        value={msgInput}
        onChange={e => handleInput(e)}
        placeholder="Type a message..."
      />
      <div className="bottom-buttons">
        <div className="add">
          <button>
            <i className="fas fa-images" />
          </button>
          <button>
            <i className="fas fa-smile" />
          </button>

          <button>
            <i className="fas fa-paperclip" />
          </button>
        </div>
        {/* <button className="enter-thumb">
          <i class="fas fa-thumbs-up"></i>
        </button> */}
      </div>
    </div>
  );
};
