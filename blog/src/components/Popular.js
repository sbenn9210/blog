import React from 'react';
import styled from 'styled-components'

const data = [
    {id: "01", title: 'The Real Reason Every Fashion Company Is Now Making Face Masks', author: 'Zara Stone', group: 'Marker'},
    {id: "02", title: '10 Books Data Scientists Should Read During Lockdown', author: 'Author Mello', group: "Towards Data Science"},
    {id: "03", title: 'A thorough review of top User Testing tools', author: "Jack Ma", group: 'UX Collective'},
    {id: "04", title: 'Compassion Makes Good Leaders Great', author: 'Ryan Renolds', group: 'The Startup'}
]

function Popular () {
    return (
        <Aside>
            <h2 className="popular-title">Popular on Medium</h2>
            <HeroDivider></HeroDivider>
        <PopularStories>
            {data.map(story => (
                <TitleGroup>
                    <h2 className="number">{story.id}</h2>
                    <span>
                         <h2 className="title">{story.title}</h2>
                         <p>{story.author} in {story.group}</p>
                    </span>
                </TitleGroup>
            ))}
        </PopularStories>
        </Aside>
    )
}

export default Popular

const HeroDivider = styled.div `
  border-bottom: 1px solid rgba(0,0,0,.15);
  max-width: 1032px;
  margin-top: 24px;
`

const Aside = styled.aside `
    height: 580px;
    width: 330px;
    .popular-title {
        margin: 32px 32px 0px 32px;
    }
`

const PopularStories = styled.div `
  width: 328px;
  height: 560px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 32px;
`

const TitleGroup = styled.span `
  display: flex;
  margin-bottom: 24px;
  .title {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 18px;
  };
  .number {
      font-size: 32px;
      color: rgba(0,0,0,.15);
      fill: rgba(0,0,0,.15);
      font-weight: 400;
      margin-right: 16px;
  }
`