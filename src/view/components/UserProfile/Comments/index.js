import React from "react";
import HoverSmilies from "../../HoverSmilies";
import "./style.scss";
import styled from "styled-components";

const user =
  "https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg";

export default props => (
  <>
    {props.comments.map((data, key) => (
      <div className="Comments" key={key}>
        <div className="profileBox">
          <img className="avatar" src={user} alt="" />
        </div>
        <div className="commentBox">
          {props.comments.map((comment, key) => (
            <>
              <div className="commentWrapper" key={key}>
                <p className="comment">
                  <a className="user" href="#">
                    Navdeep
                  </a>
                  {comment}
                </p>
              </div>
              <CommentButtonWrapper>
                <HoverSmilies>
                  <CommentButton>Like</CommentButton>
                </HoverSmilies>
                <CommentButton>Reply</CommentButton>
                <TimeAgo>30m</TimeAgo>
              </CommentButtonWrapper>
            </>
          ))}
        </div>
      </div>
    ))}
  </>
);

const CommentButtonWrapper = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
const CommentButton = styled("button")`
  border: 0;
  padding: 0;
  background: transparent;
  color: #385898;
  font-size: 12px;
  line-height: 12px;
  margin-left: 18px;
`;
const TimeAgo = styled("p")`
  color: #606770;
  margin: 0;
  font-size: 12px;
  margin-left: 14px;
`;
