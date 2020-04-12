import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers, fetchNewsPosts, fetchAvatars } from "../actions";
import styled from 'styled-components'
import HeroContent from './HeroContent'

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
            <div key={index} style={this.flex} className="item ui container" >
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


  render() {
    const { userPosts, avatars } = this.props;
    console.log(avatars)
    return (
      <div>
        <HeroContent />
        <HeroDivider></HeroDivider>
        <ExtremeContainer>
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
        <NetworkDiv>
          <h2 className='txt'>New from your network</h2>
          <img width='135px' src='https://cdn-images-1.medium.com/proxy/1*K3oqw1Ed_6VMaql4HojuDg.png' />
          <div className='images'>
          {avatars.map(avatar => (
            <div >
              <Avatar src={avatar.photo} />
            </div>
          ))}
          </div>
        </NetworkDiv>
        {this.renderList()}
        
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


const NetworkDiv = styled.div `
  background-color: rgb(215, 239, 238);
  width: 328px;
  height: 135px;
  display: flex;
  padding: 8px;
  .txt  {
    padding-top : 40px;
  };
  .images {
    display: flex;
    flex-direction: column;
  }
`



const ExtremeContainer = styled.div `
  margin-top: 48px;
`

const HeroDivider = styled.div `
  border-bottom: 1px solid rgba(0,0,0,.15);
  max-width: 1032px;
  margin: 24px auto;
`
const Avatar = styled.img `
  border-radius: 50%;
  width: 40px;
  height: 40px;
`
