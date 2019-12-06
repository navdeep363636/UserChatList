import React, { useState } from "react";
import "./style.scss";

export default () => {
  const [dropdown, setDropdown] = useState(false);
  const mens = [
    {
      iconClass: "fas fa-globe-asia",
      name: "Public",
      text: "Anyone on or off Facebook"
    },
    {
      iconClass: "fas fa-user-friends",
      name: "Friends",
      text: "Your friends on Facebook"
    }
  ];
  return (
    <div className="UserShareDropdown">
      <button
        className="UserShareDropdownToggleBtn"
        onClick={() => setDropdown(!dropdown)}
        onBlur={() => setDropdown(!dropdown)}
      >
        <i className="fas fa-user-friends" style={{ marginRight: 0 }} />
      </button>
      {dropdown && (
        <div className="UserShareDropdownWrapper">
          {mens.map(({ iconClass, name, text }, index) => (
            <button key={index}>
              <div className="iconWrapper">
                <i className={iconClass} />
              </div>
              <div className="contentWrapper">
                <p className="name">{name}</p>
                <p className="text">{text}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
