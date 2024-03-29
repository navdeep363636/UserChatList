import React from "react";
import "./style.scss";
import _ from "lodash";
import AngryIcon from "../../../../assets/images/Angry.png";
import CommentIcon from "../../../../assets/images/Comment.png";
import CountIcon from "../../../../assets/images/Count.png";
import LikeIcon from "../../../../assets/images/Like.png";
import LoveIcon from "../../../../assets/images/Love.png";
import WowIcon from "../../../../assets/images/Wow.png";
import SadIcon from "../../../../assets/images/Sad.png";
import HahaIcon from "../../../../assets/images/Haha.png";
import ShareIcon from "../../../../assets/images/Share.png";

export default class CommentIcons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			smiles: [
				{ id: "Like", icon: LikeIcon, value: 0 },
				{ id: "Love", icon: LoveIcon, value: 0 },
				{ id: "Wow", icon: WowIcon, value: 0 },
				{ id: "Sad", icon: SadIcon, value: 0 },
				{ id: "Haha", icon: HahaIcon, value: 0 },
				{ id: "Angry", icon: AngryIcon, value: 0 },
				{ id: "Comment", icon: CommentIcon, value: 0, className: "MsgCommentIcon" },
				{ id: "Share", icon: ShareIcon, value: 0 },
				{ id: "Count", icon: CountIcon, value: 0, className: "count" }
			]
		};
	}
	smileHandler = id => {
		if (id !== "Comment" && id !== "Share") {
			const smiles = this.state.smiles.slice();
			const index = _.findIndex(smiles, { id: id });
			smiles[index] = { ...smiles[index], value: smiles[index].value + 1 };
			this.setState({ smiles });
		} else if (id === "Comment") {
			const { comment, index } = this.props;
			const comments = comment.slice();
			comments[index] = { active: true };
			this.props.setComments(comments);
		}
	};
	render() {
		const { smiles } = this.state;
		return (
			<div className="CommentIconsContainer">
				<div className="CommentIconsWrapper">
					{smiles.map(({ className = "", value, icon, id }, index) => (
						<div key={index} className={`CommentIcon ${className}`}>
							<img src={icon} alt={value} onClick={() => this.smileHandler(id)} />
							<p>{value}</p>
						</div>
					))}
				</div>
			</div>
		);
	}
}
