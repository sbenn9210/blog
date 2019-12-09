import React, { Component } from "react";
import TextInput from "../../containers/TextInput";
import TextArea from "../../containers/TextArea";

class BlogCreate extends Component {
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

  handleSubmit = e => {
    console.log("Form is submitted");
    e.preventDefault();
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

export default BlogCreate;
