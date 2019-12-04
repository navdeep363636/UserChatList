import React from "react";
import ProfileCover from "../../components/ProfileCover";
import { Route } from "react-router-dom";
import { About } from "../../components/UserProfile";
import Audios from "./Audios";
import Friends from "./Friends";
import Pictures from "./Pictures";
import Videos from "./Videos";
import Groups from "./Groups";
import Notes from "./Notes";
import { UserTabs } from "../../components/Tabs";
import "./style.scss";
export default () => {
  const base = "/user";
  return (
    <div>
      <div className="ProfileCoverWrapper">
        <ProfileCover />
        <div className="TabWrapper">
          <UserTabs />
          <button className="LogoutBtn">Logout</button>
        </div>
      </div>
      <div className="UserContent">
        <Route exact path={`${base}`} component={About} />
        <Route path={`${base}/audios`} component={Audios} />
        <Route path={`${base}/friends`} component={Friends} />
        <Route path={`${base}/pictures`} component={Pictures} />
        <Route path={`${base}/videos`} component={Videos} />
        <Route path={`${base}/groups`} component={Groups} />
        <Route path={`${base}/notes`} component={Notes} />
      </div>
    </div>
  );
};
