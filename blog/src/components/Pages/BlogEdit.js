import React, { Component } from "react";
import TextInput from "../../containers/TextInput";
import TextArea from "../../containers/TextArea";
import { connect } from "react-redux";

class BlogEdit extends Component {
  state = {
    formControls: {
      title: {
        value: this.props.post.title
      },
      body: {
        value: this.props.post.body
      }
    }
  };

  handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value
        }
      }
    });
  };

  editPost = e => {
    e.preventDefault();
    this.props.addTitle(this.state.formControls.title.value);
    this.props.addBody(this.state.formControls.body.value);
    this.props.history.push("/blogs/read");
  };
  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <TextInput
              autoFocus
              type="text"
              name="title"
              value={this.state.formControls.title.value}
              onChange={this.handleInput}
            />
          </div>
          <div className="field">
            <label>Body</label>
            <TextArea
              type="text"
              name="body"
              value={this.state.formControls.body.value}
              onChange={this.handleInput}
            />
          </div>
          <button onClick={this.editPost} className="ui button primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTitle: title =>
      dispatch({
        type: "CREATE_TITLE",
        payload: title
      }),
    addBody: body =>
      dispatch({
        type: "CREATE_BODY",
        payload: body
      })
  };
};

const mapStateToProps = state => {
  return {
    post: state.blog
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogEdit);
