import React, { Component } from "react";
import "./style.scss";
import UserInfo from "../UserInfo";
import CommentIcons from "../CommentIcons";
import CommentInput from "../CommentInput";
import Comments from "../Comments";

export default class ResponseSection extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: [{}, {}, {}, {}, {}, {}, {}, {}] };
  }

  setComments = comment => {
    this.setState({ comment });
  };

  render() {
    const { comment } = this.state;
    return (
      <>
        {comment.map(({ active = false }, index) => (
          <div className="Post" key={index}>
            <div className="ContentWrapper">
              <UserInfo />
              <CommentIcons
                setComments={this.setComments}
                comment={comment}
                index={index}
              />
              <Comments />
            </div>
            {active && <CommentInput />}
          </div>
        ))}
      </>
    );
  }
}
