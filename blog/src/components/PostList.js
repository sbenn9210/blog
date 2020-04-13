import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers, fetchNewsPosts, fetchAvatars } from "../actions";
import styled from 'styled-components'
import HeroContent from './HeroContent'
import NetworkSection from './NetworkSection'
import Popular from './Popular'
import ReadingList from './ReadingList'

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
    this.props.fetchAvatars()
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
      return this.props.newsPosts.map((post, index) => {
          return (
            <StoryContent key={index} style={this.flex} className="item ui container">
              <div className="content">
                <div className="description">
                  <h2>{post.title}</h2>
                  <p>{post.description}...</p>
                </div>
                <p>{post.author}</p>
              </div>
              <div>
                <img style={this.images} alt={"images"} src={post.urlToImage} />
              </div>
            </StoryContent>
          );
      });
    } else {
      return <h1>loading...</h1>;
    }
  }


  render() {
    const { userPosts, avatars } = this.props;
    return (
      <div>
        <HeroContent />
        <HeroDivider></HeroDivider>
        <ExtremeContainer>
          <div className="stories">
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
         {this.renderList()}
          </div>
          <div>
          <NetworkSection avatars={avatars}  />
          <Popular />
          <ReadingList />
          </div>
        </ExtremeContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { newsPosts: state.newsPosts, userPosts: state.blog.posts, avatars: state.avatars };
};

export default connect(mapStateToProps, { fetchPostsAndUsers, fetchNewsPosts, fetchAvatars })(
  PostList
);




const ExtremeContainer = styled.div `
  max-width: 1032px;
  margin: 0 auto;
  margin-top: 48px;
  display: flex;
  justify-content: center;
  @media (max-width: 855px) {
    flex-direction: column;
    .stories {
      max-width: 680px;
      margin: 0 auto;
    } 
  };
  .stories {
    max-width: 680px;
    margin-right: 48px;
  } 
`

const HeroDivider = styled.div `
  border-bottom: 1px solid rgba(0,0,0,.15);
  max-width: 1032px;
  margin: 24px auto;
`

const StoryContent = styled.div `
  margin-bottom: 48px;
`