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
	render() {
		console.log("this.props", this.props);
		const { addPost } = this.props;
		const { postText } = this.state;
		return (
			<div className="createNewPost">
				<div className="createPostBtn">
					<button onClick={() => addPost(postText)}>Create Post</button>
				</div>
				<div className="tab">
					<TextPostab postText={postText} setPostText={this.setPostText} />
				</div>
			</div>
		);
	}
}
