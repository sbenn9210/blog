import React, { Component } from "react";
import TextInput from "../../containers/TextInput";
import TextArea from "../../containers/TextArea";

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
          <button onClick={this.handleSubmit} className="ui button primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default BlogEdit;
