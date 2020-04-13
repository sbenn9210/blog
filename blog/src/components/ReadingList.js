import React from 'react';
import styled from 'styled-components';

const data = [
    {title: 'The Best Machine Learning Resources', author: 'Zara Vishal', group: 'Machine Learning for Humans'},
    {title: 'Here’s a List of App Ideas You Can Start Coding Today', author: 'Richard Ramsey', group: "Better Programming"},
    {title: '9 books that will change how you think about thinking.', author: "Jack Abhishek", group: 'UX Collective'},
    {title: 'How to Define a Product Scope', author: 'Ryan Renolds', group: 'The Startup'}
]

function ReadingList () {

    return (
        <div>
            <ReadingDiv>
                <h2 className="txt">Reading List</h2>
                <img width='135px' src="https://cdn-images-1.medium.com/proxy/1*NECcaIHz7dKuAGfrlWYp5A.png" />
            </ReadingDiv>
            <Stories>
                {data.map(story => (
                    <TitleGroup>
                        <img width='41px' height='41px' className="iconic" src="bookmark.png"/>
                        <span>
                        <h2 className="title">{story.title}</h2>
                        <p>{story.author} in {story.group}</p>
                        </span>
                    </TitleGroup>
                )
                )}
            </Stories>
        </div>
    )
}

const ReadingDiv = styled.div `
  background-color: #FBF9E0;
  width: 328px;
  height: 135px;
  display: flex;
  justify-content: space-evenly;
  padding: 8px;
  .txt  {
    padding-top : 70px;
  };
`

const Avatar = styled.img `
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`

const Stories = styled.div `
  width: 328px;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #fafafa;
  padding: 24px;
`

const TitleGroup = styled.span `
  display: flex;
  margin-bottom: 24px;
  .title {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 18px;
  };
  .iconic {   
      margin: 5px 15px 0 0;
  }
`

export default ReadingList