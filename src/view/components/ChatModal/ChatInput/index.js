import React, { useState } from "react";
import "./style.scss";

import AngryIcon from "../../../../assets/images/Angry.png";

import LikeIcon from "../../../../assets/images/Like.png";
import LoveIcon from "../../../../assets/images/Love.png";
import WowIcon from "../../../../assets/images/Wow.png";
import SadIcon from "../../../../assets/images/Sad.png";
import HahaIcon from "../../../../assets/images/Haha.png";
const icons = [
  { icon: LikeIcon },
  { icon: LoveIcon },
  { icon: WowIcon },
  { icon: SadIcon },
  { icon: HahaIcon },
  { icon: AngryIcon }
];

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
          {icons.map(({ icon }) => (
            <button>
              <img src={icon} alt="" />
            </button>
          ))}
        </div>
        {/* <button className="enter-thumb">
          <i class="fas fa-thumbs-up"></i>
        </button> */}
      </div>
    </div>
  );
};
