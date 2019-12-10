import React, { useState } from "react";
import "./style.scss";
import ProgileDropdown from "./ProfileDropdown";

// setCoverImage(e.target)
const userImg =
  "https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg";
export default () => {
  const [coverImg, setCoverImage] = useState(
    "https://images.unsplash.com/photo-1525208494498-108c4b831740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
  );

  return (
    <div className="ProfileCover">
      <div
        className="CoverImage"
        style={{ background: `url(${coverImg}) center / cover` }}
      >
        <div className="ProfileCoverTop">
          <div>
            <label className="AddCover">
              <input
                type="file"
                className="fileInput"
                onChange={e => {
                  const file = e.target.files[0];

                  const reader = new FileReader();
                  reader.onload = function(evt) {
                    return setCoverImage(evt.target.result);
                  };
                  reader.readAsDataURL(file);
                }}
              />
              <i className="fas fa-camera" /> Add Cover Photo
            </label>
          </div>
          <div>
            <div className="search">
              <input type="search" placeholder="Search..." />
              <button>
                <i class="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
        <div className="ProfileCoverBottom">
          <div className="ProfileCoverUser">
            <div className="UserImageWrapper">
              <img className="UserImage" src={userImg} alt="" />
              <label className="uploadProfile">
                <input type="file" />
              </label>
            </div>
            <h2 className="UserName">Im Arifullah</h2>
          </div>
          <div className="ProfileButtons">
            <button>
              <i className="fas fa-user-plus" />
              Add Friend
            </button>
            <button>
              <i className="fab fa-facebook-messenger" />
              Message
            </button>
            <ProgileDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};
