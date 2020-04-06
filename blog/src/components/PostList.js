import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import { fetchNewsPosts } from "../actions";
import styled from 'styled-components'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
    this.props.fetchNewsPosts();
  }


  images = {
    height: "100px",
    width: "100px",
    marginRight: "10px"
  };
  flex = {
    display: "flex"
  };
  renderList() {
    if (this.props.newsPosts) {
      return this.props.newsPosts.map(post => {
        return (
          <div style={this.flex} className="item ui container" >
            <div>
              <img style={this.images} alt={"images"} src={post.urlToImage} />
            </div>
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p>{post.content}</p>
              </div>
              <p>{post.author}</p>
            </div>
          </div>
        );
      });
    } else {
      return <h1>loading...</h1>;
    }
  }

  renderBreakingStories() {
    if (this.props.newsPosts && this.props.newsPosts[0]) { 
      var firstStory = this.props.newsPosts[0]
      return (
        <Container>
          <PrimaryImage src={firstStory.urlToImage} />
        </Container>
      )
    }
    
  }

  render() {
    const { userPosts } = this.props;
    return (
      <div>
        {userPosts.map(post => (
          <div className="ui relaxed divided list">
            <div className="item">
              <i className="large middle aligned icon user" />
              <div className="content">
                <div className="description">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div>{this.renderBreakingStories()}</div>
        <div className="ui relaxed divided list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { newsPosts: state.newsPosts, userPosts: state.blog.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers, fetchNewsPosts })(
  PostList
);


const Container = styled.div `
width: 100%;
maxWith: 1208px
`

const PrimaryImage = styled.img `
  height: 150px;
  Width: 448px
`