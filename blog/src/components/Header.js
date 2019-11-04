import React, { Component } from "react";
import glamorous from "glamorous";

class Header extends Component {
  render() {
    return (
      <Div>
        <h1>Blogger</h1>
        <h3>Become a member</h3>
        <h3>Sign in</h3>
        <h3>Get Started</h3>
      </Div>
    );
  }
}

export default Header;

const Div = glamorous.div({
  display: "flex"
});
