import React, { Component } from "react";
import { connect } from "react-redux";

class BlogRead extends Component {
  render() {
    console.log(this);
    const { post } = this.props;
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    post: state.blog
  };
};
export default connect(mapStateToProps)(BlogRead);
