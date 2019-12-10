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
import { UserTabs } from "../../components/Tabs";
import "./style.scss";
export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showConfirmButtons: false };
  }

  showConfirmButtons = val => {
    this.setState({ showConfirmButtons: val });
  };
  render() {
    const base = "/user";
    const { showConfirmButtons } = this.state;
    return (
      <div>
        <div className="ProfileCoverWrapper">
          <ProfileCover showConfirmButtons={showConfirmButtons} />
          <div className="TabWrapper">
            {!showConfirmButtons ? <UserTabs /> : <div />}
            <div>
              {showConfirmButtons && (
                <div className="coveOptionsBtns">
                  <p>
                    <i class="fas fa-globe-asia" />
                    Public
                  </p>
                  <button className="btn cancel">Cancel</button>
                  <button className="btn save">Save Changes</button>
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
        </div>
      </div>
    );
  }
}
