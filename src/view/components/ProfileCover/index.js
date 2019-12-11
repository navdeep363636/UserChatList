import React, { useState } from "react";
import "./style.scss";
import ProgileDropdown from "./ProfileDropdown";

// setCoverImage(e.target)
export default props => {
	const { profileImg, setProfileImage, coverImg, setCoverImage, newProfileImg, newCoverImg } = props;
	return (
		<div className="ProfileCover">
			<div className="CoverImage" style={{ background: `url(${newCoverImg || coverImg}) center / cover` }}>
				<div className="ProfileCoverTop">
					<div>
						<label className="AddCover">
							<input
								type="file"
								className="fileInput"
								onChange={e => {
									const file = e.target.files[0];

									const reader = new FileReader();
									reader.onload = function(evt) {
										return setCoverImage(evt.target.result);
									};
									reader.readAsDataURL(file);
								}}
							/>
							<i className="fas fa-camera" /> Add Cover Photo
						</label>
					</div>
					<div>
						<div className="search">
							<input type="search" placeholder="Search..." />
							<button>
								<i class="fas fa-search" />
							</button>
						</div>
					</div>
				</div>
				<div className="ProfileCoverBottom">
					<div className="ProfileCoverUser">
						<div className="UserImageWrapper">
							<img className="UserImage" src={newProfileImg || profileImg} alt="" />
							<label className="uploadProfile">
								<input
									type="file"
									onChange={e => {
										const file = e.target.files[0];

										const reader = new FileReader();
										reader.onload = function(evt) {
											return setProfileImage(evt.target.result);
										};
										reader.readAsDataURL(file);
									}}
								/>
							</label>
						</div>
						<h2 className="UserName">Im Arifullah</h2>
					</div>
					<div className="ProfileButtons">
						<button>
							<i className="fas fa-user-plus" />
							Add Friend
						</button>
						<button>
							<i className="fab fa-facebook-messenger" />
							Message
						</button>
						<ProgileDropdown />
					</div>
				</div>
			</div>
		</div>
	);
};
