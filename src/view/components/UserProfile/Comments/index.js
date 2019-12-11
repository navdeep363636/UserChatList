import React from "react";
import "./style.scss";
const user = "https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg";
export default props => (
	<>
		{props.comments.map((data, key) => (
			<div className="Comments" key={key}>
				<div className="profileBox">
					<img className="avatar" src={user} alt="" />
				</div>
				<div className="commentBox">
					{props.comments.map((comment, key) => (
						<div className="commentWrapper" key={key}>
							<p className="comment">
								<a className="user">Navdeep</a>
								{comment}
							</p>
						</div>
					))}
				</div>
			</div>
		))}
	</>
);
