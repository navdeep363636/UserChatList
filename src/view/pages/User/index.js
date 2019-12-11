import React from "react";
import ProfileCover from "../../components/ProfileCover";
import { Route } from "react-router-dom";
import { Timeline } from "../../components/UserProfile";
import About from "./About";
import Audios from "./Audios";
import Friends from "./Friends";
import Pictures from "./Pictures";
import Videos from "./Videos";
import Groups from "./Groups";
import Notes from "./Notes";
import Others from "./Others";
import { UserTabs } from "../../components/Tabs";
import "./style.scss";
export default class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showConfirmButtons: false,
			profileImg: "https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg",
			coverImg:
				"https://images.unsplash.com/photo-1525208494498-108c4b831740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
		};
	}

	showConfirmButtons = val => {
		this.setState({ showConfirmButtons: val });
	};

	setProfileImage = val => {
		this.setState({ newProfileImg: val, showConfirmButtons: true });
	};

	setCoverImage = val => {
		this.setState({ newCoverImg: val, showConfirmButtons: true });
	};

	cancel = () => {
		this.setState({
			newCoverImg: null,
			newProfileImg: null,
			showConfirmButtons: false
		});
	};

	submit = () => {
		const { newCoverImg, newProfileImg, coverImg, profileImg } = this.state;
		this.setState({
			coverImg: newCoverImg || coverImg,
			profileImg: newProfileImg || profileImg,
			newCoverImg: null,
			newProfileImg: null,
			showConfirmButtons: false
		});
	};
	render() {
		const base = "/user";
		const { showConfirmButtons } = this.state;
		return (
			<div>
				<div className="ProfileCoverWrapper">
					<ProfileCover
						{...this.state}
						setCoverImage={this.setCoverImage}
						setProfileImage={this.setProfileImage}
						showConfirmButtons={showConfirmButtons}
					/>
					<div className="TabWrapper">
						{!showConfirmButtons ? <UserTabs /> : <div />}
						<div>
							{showConfirmButtons && (
								<div className="coveOptionsBtns">
									<p>
										<i class="fas fa-globe-asia" />
										Public
									</p>
									<button className="btn cancel" onClick={this.cancel}>
										Cancel
									</button>
									<button className="btn save" onClick={this.submit}>
										Save Changes
									</button>
								</div>
							)}
							{!showConfirmButtons && (
								<button className="LogoutBtn">
									<i className="fas fa-power-off" />
								</button>
							)}
						</div>
					</div>
				</div>
				<div className="UserContent">
					<Route exact path={`${base}`} component={Timeline} />
					<Route path={`${base}/about`} component={About} />
					<Route path={`${base}/audios`} component={Audios} />
					<Route path={`${base}/friends`} component={Friends} />
					<Route path={`${base}/pictures`} component={Pictures} />
					<Route path={`${base}/videos`} component={Videos} />
					<Route path={`${base}/groups`} component={Groups} />
					<Route path={`${base}/notes`} component={Notes} />
					<Route path={`${base}/others`} component={Others} />
				</div>
			</div>
		);
	}
}
