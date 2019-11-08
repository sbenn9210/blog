import React, { Component } from "react";
import glamorous from "glamorous";
import GoogleAuth from "./GoogleAuth";
class Header extends Component {
  render() {
    return (
      <Div>
        <h1>Blogger</h1>
        <h3>Become a member</h3>
        <h3>Get Started</h3>
        <GoogleAuth />
      </Div>
    );
  }
}

export default Header;

const Div = glamorous.div({
  display: "flex",
  justifyContent: "space-evenly",
  marginBottom: "25px"
});
