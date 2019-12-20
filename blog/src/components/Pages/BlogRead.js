import React, { Component } from "react";
import { connect } from "react-redux";

class BlogRead extends Component {
  handleEdit = () => {
    this.props.history.push("/blogs/edit");
  };

  deletePost = () => {
    this.props.deleteTitle();
    this.props.deleteBody();
    this.props.history.push("/blogs/create");
  };
  render() {
    const { post } = this.props;
    return (
      <div>
        <div>
          <button onClick={this.handleEdit}>
            <i className="edit icon"></i>
          </button>
          <button onClick={this.deletePost}>
            <i className="trash icon"></i>
          </button>
        </div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTitle: () =>
      dispatch({
        type: "CREATE_TITLE",
        payload: null
      }),
    deleteBody: () =>
      dispatch({
        type: "CREATE_BODY",
        payload: null
      })
  };
};

const mapStateToProps = state => {
  return {
    post: state.blog
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogRead);
