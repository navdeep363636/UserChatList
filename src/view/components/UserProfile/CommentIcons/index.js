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
        {
          id: "Comment",
          icon: CommentIcon,
          value: 0,
          className: "MsgCommentIcon"
        },
        { id: "Share", icon: ShareIcon, value: 0, className: "share" },
        { id: "Count", icon: CountIcon, value: 0, className: "count" },
        {
          id: "Boost",
          className: "d-flex align-items-center",
          type: "fa",
          faClass: "fas fa-rocket",
          value: 0
        }
      ]
    };
  }
  smileHandler = id => {
    if (id !== "Comment" && id !== "Share") {
      const smiles = this.state.smiles.slice();
      const isAlreadyResponded = _.find(smiles, { value: 1 });
      if (!isAlreadyResponded) {
        const index = _.findIndex(smiles, { id: id });
        if (smiles[index].value < 1) {
          smiles[index] = { ...smiles[index], value: smiles[index].value + 1 };
          this.setState({ smiles });
        }
      }
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
          {smiles.map(
            (
              { className = "", value, icon, type = false, faClass = "", id },
              index
            ) => (
              <div key={index} className={`CommentIcon ${className}`}>
                {type && type === "fa" ? (
                  <i className={faClass} />
                ) : (
                  <img
                    src={icon}
                    alt={value}
                    onClick={() => this.smileHandler(id)}
                  />
                )}

                {id !== "Boost" && <p>{value}</p>}
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
