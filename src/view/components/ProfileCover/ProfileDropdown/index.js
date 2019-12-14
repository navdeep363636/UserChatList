import React, { useState } from "react";
import "./style.scss";

export default ({ btnClassName = "" }) => {
  const [dropdown, setDropdown] = useState(false);
  const mens = [
    {
      iconClass: "fas fa-rocket",
      name: "Boost Profile"
    },
    {
      iconClass: "fas fa-flag",
      name: "Report"
    }
  ];
  return (
    <div className="ProfileDropdown">
      <button
        className={`ProfileDropdownToggleBtn ${btnClassName}`}
        onBlur={() => setDropdown(false)}
        onClick={() => setDropdown(!dropdown)}
      >
        <i className="fas fa-eye-dropper" style={{ marginRight: 0 }} />
      </button>
      {dropdown && (
        <div className="ProfileDropdownWrapper">
          {mens.map(({ iconClass, name }, index) => (
            <button key={index}>
              <div className="iconWrapper">
                <i className={iconClass} />
              </div>
              <div className="contentWrapper">
                <p className="name">{name}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
