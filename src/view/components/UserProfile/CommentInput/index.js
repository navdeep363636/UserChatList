import React from "react";
import "./style.scss";
import AudioImage from "../../../../assets/images/Audio.png";
import cameraBlackImage from "../../../../assets/images/cameraBlack.png";
import VideoImage from "../../../../assets/images/Video.png";
import SmileImage from "../../../../assets/images/Like.png";

export default class CommentInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
	}
	_handleKeyUp = e => {
		if (e.keyCode === 13) {
			this.setState({ value: "" });
			this.props.addComment(e.target.value);
		}
	};

	handleChange = e => {
		this.setState({ value: e.target.value });
	};
	render() {
		const { value } = this.state;
		return (
			<div className="UserCommentInput">
				<div className="wrapper">
					<input
						placeholder="Write a comment..."
						value={value}
						onKeyUp={this._handleKeyUp}
						onChange={this.handleChange}
					/>
					<div className="buttonWapper">
						<button>
							<img src={SmileImage} alt="SmileImage" />
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
					</div>
				</div>
			</div>
		);
	}
}
