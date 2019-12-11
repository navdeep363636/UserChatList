import React from "react";
import "./style.scss";
import _ from "lodash";
import TextImage from "../../../../assets/images/Text.png";
import AudioImage from "../../../../assets/images/Audio.png";
import cameraBlackImage from "../../../../assets/images/cameraBlack.png";
import VideoImage from "../../../../assets/images/Video.png";
import LiveImage from "../../../../assets/images/Live.png";
import ResponseSection from "../ResponseSection";
import CreateNewPost from "../CreateNewPost";
export default class Timeline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [
				{
					postMessage: {
						first: "Lorem ispume thso fjd fjgn defgfner",
						second: "spume thr",
						third: "Lorem ispume ther"
					}
				},
				{
					postMessage: {
						first: "Lorem ispume thso fjd fjgn defgfner",
						second: "spume thr",
						third: "Lorem ispume ther"
					}
				},
				{
					postMessage: {
						first: "Lorem ispume thso fjd fjgn defgfner",
						second: "spume thr",
						third: "Lorem ispume ther"
					}
				},
				{
					postMessage: {
						first: "Lorem ispume thso fjd fjgn defgfner",
						second: "spume thr",
						third: "Lorem ispume ther"
					}
				},
				{
					postMessage: {
						first: "Lorem ispume thso fjd fjgn defgfner",
						second: "spume thr",
						third: "Lorem ispume ther"
					}
				},
				{
					postMessage: {
						first: "Lorem ispume thso fjd fjgn defgfner",
						second: "spume thr",
						third: "Lorem ispume ther"
					}
				},
				{
					postMessage: {
						first: "Lorem ispume thso fjd fjgn defgfner",
						second: "spume thr",
						third: "Lorem ispume ther"
					}
				},
				{
					postMessage: {
						first: "Lorem ispume thso fjd fjgn defgfner",
						second: "spume thr",
						third: "Lorem ispume ther"
					}
				}
			]
		};
	}

	setPosts = posts => {
		this.setState({ posts });
	};

	addPost = details => {
		const prevPosts = this.state.posts.slice();
		let newPosts = [{ postMessage: { first: details } }];
		newPosts.push(prevPosts);
		const posts = _.flattenDeep(newPosts);
		this.setState({
			posts
		});
	};
	render() {
		return (
			<div className="UserProfileAbout">
				<div className="UserProfileAboutInputs">
					<div>
						<CreateNewPost addPost={this.addPost} />
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
				<ResponseSection setPosts={this.setPosts} addPost={this.addPost} posts={this.state.posts} />
			</div>
		);
	}
}
