import React, { Component } from "react";
import "./style.scss";
import UserInfo from "../UserInfo";
import CommentIcons from "../CommentIcons";
import CommentInput from "../CommentInput";
import Comments from "../Comments";

export default class ResponseSection extends Component {
	constructor(props) {
		super(props);
		this.state = { posts: [{}, {}, {}, {}, {}, {}, {}, {}] };
	}

	setPosts = posts => {
		this.setState({ posts });
	};

	render() {
		const { posts } = this.state;
		return (
			<>
				{posts.map(({ active = false }, index) => (
					<div className="Post" key={index}>
						<div className="ContentWrapper">
							<UserInfo />
							<CommentIcons setComments={this.setPosts} comment={posts} index={index} />
							{active && <Comments />}
						</div>
						{active && <CommentInput />}
					</div>
				))}
			</>
		);
	}
}
