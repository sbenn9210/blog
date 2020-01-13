import React, { Component } from "react";
import GoogleAuth from "./GoogleAuth";
class Header extends Component {
  render() {
    const headerStyle = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "25px",
      maxWidth: "1033px",
      marginLeft: "auto",
      marginRight: "auto",
      height: "60px"
    };

    const rightIcons = {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center"
    };

    const buttonSpacing = {
      marginRight: "24px"
    };
    return (
      <div style={headerStyle}>
        <h1>Blogger</h1>
        <div style={rightIcons}>
          <i style={buttonSpacing} className="large search icon" />
          <i style={buttonSpacing} className="large bell outline icon" />
          <button style={buttonSpacing} className="ui black basic button">
            Upgrade
          </button>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default Header;
