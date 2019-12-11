import React from "react";
import "./style.scss";

import TextPostab from "./TextPostTab";

export default class CreateNewPost extends React.Component {
	constructor(props) {
		super(props);
		this.state = { postText: "" };
	}

	setPostText = val => {
		this.setState({ postText: val });
	};

	submitPost = () => {
		const { postText } = this.state;
		const { addPost } = this.props;
		this.setPostText("");
		addPost(postText);
	};

	render() {
		const { postText } = this.state;
		return (
			<div className="createNewPost">
				<div className="createPostBtn">
					<button>Create Post</button>
				</div>
				<div className="tab">
					<TextPostab postText={postText} setPostText={this.setPostText} />
					<button
						onClick={this.submitPost}
						style={{
							background: "#0099ff",
							color: "#fff",
							padding: "6px 12px",
							borderRadius: 4,
							border: 0
						}}>
						Post
					</button>
				</div>
			</div>
		);
	}
}
