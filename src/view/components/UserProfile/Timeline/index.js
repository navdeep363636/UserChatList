import React from "react";
import "./style.scss";
import TextImage from "../../../../assets/images/Text.png";
import AudioImage from "../../../../assets/images/Audio.png";
import cameraBlackImage from "../../../../assets/images/cameraBlack.png";
import VideoImage from "../../../../assets/images/Video.png";
import LiveImage from "../../../../assets/images/Live.png";
import ResponseSection from "../ResponseSection";
import CreateNewPost from "../CreateNewPost";
export default () => (
  <div className="UserProfileAbout">
    <div className="UserProfileAboutInputs">
      <div>
        <CreateNewPost />
      </div>
      <div className="UserProfileAboutFileInputs">
        <button>
          <img src={LiveImage} alt="LiveImage" />
        </button>
        <button>
          <img src={cameraBlackImage} alt="cameraBlackImage" />
        </button>
        <button>
          <img src={AudioImage} alt="AudioImage" />
        </button>
        <button>
          <img src={VideoImage} alt="VideoImage" />
        </button>
        <button>
          <i style={{ fontSize: 26 }} class="fas fa-ellipsis-h" />
        </button>
      </div>
    </div>
    <ResponseSection />
  </div>
);
