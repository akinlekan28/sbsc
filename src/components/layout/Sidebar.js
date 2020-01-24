import React, { Component, Fragment } from "react";
import logo from "./logo.png";
import home from "./home.png";
import requests from "./requests.png";
import approval from "./approval.png";
import resize from "./resize.png";

export default class Sidebar extends Component {
  state = {
    isOpen: true
  };

  renderSidebar() {
    if (!this.state.isOpen) {
      return null;
    }
    return (
      <div className="sidebar">
        <div className="text-center">
          <img src={logo} alt="logo.png" className="logo-img" />
        </div>
        <div className="text-center">
          <ul>
            <li className="list-item list-item-active">
              <img src={home} alt="home.png" className="icon-img" />
              <a className="list-link" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="list-item">
              <img src={requests} alt="request.png" className="icon-img" />
              <a className="list-link" href="/budget">
                Budget
              </a>
            </li>
            <li className="list-item">
              <img src={approval} alt="approval.png" className="icon-img" />
              <a className="list-link" href="/approval">
                Approvals
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  toggleSidebar = () => {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }))
      
  };

  render() {
    const SidebarIcon = ({ handleClick, isOpen }) => {
      return (
        <span onClick={handleClick} className="resize-icon" style={{zIndex: 99999999999}}>
          {isOpen ? (
            <img src={resize} alt="resize.png" className="resize" />
          ) : (
            <img src={resize} alt="resize.png" className="resize" />
          )}
        </span>
      );
    };

    return (
      <Fragment>
        {this.renderSidebar()}
        <SidebarIcon
          isOpen={this.state.isOpen}
          handleClick={this.toggleSidebar}
        />
      </Fragment>
    );
  }
}
