import React, { Component } from "react";
import "./style.css";

export default class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
      title: "Annual"
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  listItems = [
    { id: "1", title: "Quarter" },
    {
      id: "2",
      title: "Bi-Annual"
    }
  ];

  render() {
    const { title } = this.state;
    return (
      <div
        className="dropdown capex-dropdown"
        style={{
          background: "rgba(77, 213, 153, 0.2);"
        }}
      >
        <div className="button" onClick={this.showDropdownMenu}>
          {title}
        </div>

        {this.state.displayMenu ? (
          <ul>
            {this.listItems.map(item => (
              <li key={item.id}>
                <a className="active" href="#Create Page">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}
