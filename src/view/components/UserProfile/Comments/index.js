import React, { useState } from "react";
import HoverSmilies from "../../HoverSmilies";
import "./style.scss";
import styled from "styled-components";
import CommentInput from "../CommentInput";
import { Smilies } from "../../../../shared/sharedArray";
const Comments = ({ comment }) => {
  const [isReply, setIsReply] = useState(false);
  return (
    <>
      <div className="commentWrapper">
        <p className="comment">
          {/* <div>
            <img src={Smilies[0].icon} />
          </div> */}
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
        <CommentButton onClick={() => setIsReply(true)}>Reply</CommentButton>
        <TimeAgo>30m</TimeAgo>
      </CommentButtonWrapper>
      {isReply && <CommentInput />}
    </>
  );
};
const user =
  "https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg";

export default props => {
  return (
    <>
      {props.comments.map((data, key) => (
        <div className="Comments" key={key}>
          <div className="profileBox">
            <img className="avatar" src={user} alt="" />
          </div>
          <div className="commentBox">
            {props.comments.map((comment, key) => (
              <Comments key={key} comment={comment} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

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
  display: block;
`;
const TimeAgo = styled("p")`
  color: #606770;
  margin: 0;
  font-size: 12px;
  margin-left: 14px;
`;
