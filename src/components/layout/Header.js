import React from "react";
import bell from "./bell.png";

export default function Header() {
  return (
    <div className="header">
      <div className="flex">
        <div className="header-flex-1"></div>
        <div className="header-flex-2">
          <div className="notification-flex">
            <div className="notification-item bell-area">
              <img src={bell} alt="bell.png" className="bell" />
            </div>
            <div className="notification-item name-area">
              <p>
                <strong>Bidemi Yusuf</strong>
              </p>
              <p>Executive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
