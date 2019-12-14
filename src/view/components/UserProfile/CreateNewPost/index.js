import React from "react";
import { Root } from "./style";

import TextPostab from "./TextPostTab";

export default class CreateNewPost extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { postText: "" };
  }

  setPostText = val => {
    this.setState({ postText: val });
  };

  submitPost = () => {
    const { postText } = this.state;
    const { addPost } = this.props;
    this.setPostText("");
    addPost(postText);
  };

  render() {
    const { postText, active } = this.state;
    const { handleCreatingNewPost, isCreatingNewPost } = this.props;
    return (
      <>
        <Root>
          <div className="createPostBtn">
            <button onClick={() => handleCreatingNewPost(true)}>
              <i class="fas fa-pencil-alt"></i>Create post
            </button>
            {/* <button>
              <i class="fas fa-camera"></i>Photo/Video
            </button>
            <button>
              <i class="fas fa-video"></i>Live video
            </button>
            <button>
              <i class="fas fa-flag"></i>Life Event
            </button> */}
          </div>
          <div className="tab">
            <TextPostab postText={postText} setPostText={this.setPostText} />
            <button
              onClick={this.submitPost}
              style={{
                background: "#0099ff",
                color: "#fff",
                padding: "6px 12px",
                borderRadius: 4,
                border: 0
              }}
            >
              Post
            </button>
          </div>
        </Root>
      </>
    );
  }
}
