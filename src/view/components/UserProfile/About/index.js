import React from "react";
import "./style.scss";
import TextImage from "../../../../assets/images/Text.png";
import AudioImage from "../../../../assets/images/Audio.png";
import cameraBlackImage from "../../../../assets/images/cameraBlack.png";
import VideoImage from "../../../../assets/images/Video.png";
import LiveImage from "../../../../assets/images/Live.png";
import ResponseSection from "../ResponseSection";

export default () => (
	<div className="UserProfileAbout">
		<div className="UserProfileAboutInputs">
			<img src={TextImage} className="TextImage" alt="TextImage" />
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
