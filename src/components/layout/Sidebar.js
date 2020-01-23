import React from "react";
import logo from './logo.png'

export default function Sidebar() {
  return (
    <div className="sidebar-container">
        <div className="text-center">
            <img src={logo} className="logo-img" />
        </div>
      <p>Side bar</p>
    </div>
  );
}
