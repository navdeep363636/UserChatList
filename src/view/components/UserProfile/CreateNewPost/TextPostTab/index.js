import React from "react";
import "./style.scss";
import { tsPropertySignature } from "@babel/types";
const userImg = "https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg";
export default props => (
	<div className="textPostTab">
		<div className="avatarCol">
			<img src={userImg} className="avatar" alt="Profile-Icon" />
		</div>
		<div className="postCol">
			<form>
				<textarea
					value={props.postText}
					placeholder="What's on your mind?"
					onChange={e => props.setPostText(e.target.value)}
				/>
			</form>
		</div>
	</div>
);
