import React, { Component } from "react";
import { connect } from "react-redux";

class BlogRead extends Component {
  handleEdit = () => {
    this.props.history.push("/blogs/edit");
  };
  render() {
    const { post } = this.props;
    return (
      <div>
        <button onClick={this.handleEdit}>
          <i class="edit icon"></i>
        </button>
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
