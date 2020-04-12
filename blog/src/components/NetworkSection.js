import React from 'react';
import styled from 'styled-components';

function NetworkSection(props) {
  const { avatars } = props
    return (
       <div>
        <NetworkDiv>
          <h2 className='txt'>New from your network</h2>
          <img width='135px' src='https://cdn-images-1.medium.com/proxy/1*K3oqw1Ed_6VMaql4HojuDg.png' />
        </NetworkDiv>
        <NetworkStories>
          {avatars.map(avatar => (
            <div>
              <Avatar src={avatar.photo} />
            </div>
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
`

const Avatar = styled.img `
  border-radius: 50%;
  width: 40px;
  height: 40px;
`

const NetworkStories = styled.div `
  display: flex;
  flex-direction: column;
`
