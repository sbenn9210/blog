import React from 'react';
import styled from 'styled-components';

const data = [
  {title: 'Defining Nested Routes with React Router', group: 'The Startup'},
  {title: 'Taking a UX Approach to Content Creation', group: 'UX Collective'},
  {title: 'Accessibility: how to involve dyslexic users into your design', group: 'Towards Data Science'},
  {title: 'Adding Reactivity to Our Svelte App', group: 'The Startup'}
]

function NetworkSection (props) {
  const { avatars } = props
    return (
       <div>
        <NetworkDiv>
          <h2 className='txt'>New from your network</h2>
          <img width='135px' src='https://cdn-images-1.medium.com/proxy/1*K3oqw1Ed_6VMaql4HojuDg.png' />
        </NetworkDiv>
        <NetworkStories>
          {avatars.map((avatar, index) => (
            <TitleGroup>
            <Avatar src={avatar.photo} />
            <span>
              <h2 className="title">{data[index].title}</h2>
              <p>{avatar.name} in {data[index].group}</p>
            </span>
            </TitleGroup>
          ))}
        </NetworkStories>
       </div> 

    )
  }

export default NetworkSection

const NetworkDiv = styled.div `
  background-color: rgb(215, 239, 238);
  width: 328px;
  height: 135px;
  display: flex;
  padding: 8px;
  .txt  {
    padding-top : 40px;
  };
  @media (max-width: 855px) {
    width: 680px;
    margin: 0 auto;
  };
`

const Avatar = styled.img `
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

const NetworkStories = styled.div `
  width: 328px;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #fafafa;
  padding: 32px;
  @media (max-width: 855px) {
    width: 680px;
    margin: 0 auto;
  };
`

const TitleGroup = styled.span `
  display: flex;
  margin-bottom: 24px;
  .title {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 18px;
  };
`