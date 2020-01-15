import React from "react";

function Topics() {
  const mobileView = window.matchMedia("(width: 500px");

  const test = e => {
    console.log(e.match);
  };

  mobileView.addListener(test);

  const spacing = {
    margin: "0 24px 0 24px"
  };
  const container = {
    display: "flex",
    justifyContent: "center",
    margin: "0 auto 24px auto",
    width: mobileView.matches ? "400px" : "1000px",
    whiteSpace: "nowrap"
  };
  const hidden = {
    overflow: "hidden"
  };
  return (
    <div style={container}>
      <i className="chevron left icon" />
      <div style={hidden}>
        <span style={spacing}>home</span>
        <span style={spacing}>onezero</span>
        <span style={spacing}>elemental</span>
        <span style={spacing}>gen</span>
        <span style={spacing}>zora</span>
        <span style={spacing}>forge</span>
        <span style={spacing}>human parts</span>
        <span style={spacing}>marker</span>
        <span style={spacing}>level</span>
        <span style={spacing}>heated</span>
        <span style={spacing}>modus</span>
        <span style={spacing}>more</span>
      </div>
      <i className="chevron right icon" />
    </div>
  );
}

export default Topics;
