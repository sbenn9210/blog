import React, { Component } from "react";
import TextInput from "../../containers/TextInput";
import TextArea from "../../containers/TextArea";
import { connect } from "react-redux";

class BlogEdit extends Component {
  state = {
    formControls: {
      title: {
        value: ""
      },
      body: {
        value: ""
      }
    }
  };
  render() {
    const { post } = this.props;
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <TextInput
              autoFocus
              type="text"
              name="title"
              value={post.title}
              onChange={this.handleInput}
            />
          </div>
          <div className="field">
            <label>Body</label>
            <TextArea
              type="text"
              name="body"
              value={post.body}
              onChange={this.handleInput}
            />
          </div>
          <button onClick={this.handleSubmit} className="ui button primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    post: state.blog
  };
};

export default connect(mapStateToProps)(BlogEdit);
