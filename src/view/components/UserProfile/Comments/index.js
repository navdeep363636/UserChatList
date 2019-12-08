import React from "react";
import "./style.scss";
const temp = [{}, {}, {}, {}, {}];
const user =
  "https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg";
export default () => (
  <>
    {temp.map(() => (
      <div className="Comments">
        <div className="profileBox">
          <img className="avatar" src={user} alt="" />
        </div>
        <div className="commentBox">
          {temp.map(() => (
            <div className="commentWrapper">
              <p className="comment">
                <a className="user">Navdeep</a> njdfhfhd dnfjed efhbewd
              </p>
            </div>
          ))}
        </div>
      </div>
    ))}
  </>
);
