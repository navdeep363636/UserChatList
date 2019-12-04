import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import menus from "./menus";
export default () => (
  <div className="UserTabs">
    <ul>
      {menus.map(({ name, link }, index) => (
        <li>
          <Link to={`/user/${link}`} key={index}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
