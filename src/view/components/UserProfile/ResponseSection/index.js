import React, { Component } from "react";
import "./style.scss";
import UserInfo from "../UserInfo";
import CommentIcons from "../CommentIcons";
import CommentInput from "../CommentInput";
import Comments from "../Comments";

export default class ResponseSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [" njdfhfhd dnfjed efhbewd", " njdfhfhd dnfjed efhbewd"]
    };
  }
  addComment = val => {
    let comments = this.state.comments.slice();
    comments.push(val);
    this.setState({ comments });
  };

  render() {
    const { posts, setPosts, addPost } = this.props,
      { comments } = this.state;
    return (
      <>
        {posts.map(({ postMessage, active = false }, index) => (
          <div className="Post" key={index}>
            <div className="ContentWrapper">
              <UserInfo postMessage={postMessage} addPost={addPost} />
              <CommentIcons
                setComments={setPosts}
                comment={posts}
                index={index}
              />
              {active && <Comments comments={comments} />}
            </div>
            {active && <CommentInput addComment={this.addComment} />}
          </div>
        ))}
      </>
    );
  }
}
