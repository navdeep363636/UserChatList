import React from "react";
import "./style.scss";

import TextPostab from "./TextPostTab";

const userImg =
  "https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg";
export default () => (
  <div className="createNewPost">
    <div className="createPostBtn">
      <button>
        <i class="fas fa-pencil-alt"></i>Create post
      </button>
      <button>
        <i class="fas fa-camera"></i>Photo/Video
      </button>
      <button>
        <i class="fas fa-video"></i>Live video
      </button>
      <button>
        <i class="fas fa-flag"></i>Life Event
      </button>
    </div>
    <div className="tab">
      <TextPostab />
    </div>
  </div>
);
