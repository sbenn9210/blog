import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNewsPosts } from "../actions";
import styled from 'styled-components'


class HeroContent extends Component {
    componentDidMount() {
        this.props.fetchNewsPosts();

    }

    renderHeroMiddle() {
        if (this.props.newsPosts && this.props.newsPosts[1]) {
          var storesArr = []
          storesArr.push(this.props.newsPosts[1],this.props.newsPosts[2],this.props.newsPosts[3])
          return storesArr.map(story => {
            return (
              <MiddleContainer>
                <img alt='headline' src={story.urlToImage} className="thumbnail" />
                <HeroMiddleText>
                <h3>{story.title.split(' ').slice(0,8).join(' ')}</h3>
                <p>{story.author} in {story.source.name}</p>
                </HeroMiddleText>
              </MiddleContainer>
            )
          })
        }
      }

    render() {
        return (
            <ExtremeHero>
            {this.props.newsPosts && this.props.newsPosts[0] ? 
                <Container>
                <HeroImage src={this.props.newsPosts[0].urlToImage} />
                <TextContainer>
                <h1>{this.props.newsPosts[0].title.split(' ').slice(0,8).join(' ')}</h1>
                <p>{this.props.newsPosts[0].author} in {this.props.newsPosts[0].source.name}</p>
                </TextContainer>  
              </Container>
                : null
            }
                <div>{this.renderHeroMiddle()}</div>
                <div className="hide">
                {this.props.newsPosts && this.props.newsPosts[3] ? 
                <HiddenContainer>
                <HeroImage src={this.props.newsPosts[3].urlToImage} />
                <TextContainer>
                <h2>{this.props.newsPosts[3].title.split(' ').slice(0,8).join(' ')}</h2>
                <p>{this.props.newsPosts[3].author} in {this.props.newsPosts[3].source.name}</p>
                </TextContainer>  
              </HiddenContainer>
                : null
            }
            </div>
            </ExtremeHero>
        )
    }

}

const mapStateToProps = state => {
    return {newsPosts: state.newsPosts}
}

export default connect(mapStateToProps, {fetchNewsPosts})(HeroContent)

const ExtremeHero = styled.div `
  max-width: 1208px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  
  
`
const HeroImage = styled.img `
  height: 150px;
  Width: 100%;
  margin-bottom: 16px;
`
const Container = styled.div `
width: 484px;
height: 350px;
margin-right: 24px;
`
const HiddenContainer = styled.div `
width: 484px;
height: 350px;
margin-right: 24px;
@media (max-width: 1030px) {
      display: none;
  }
`
const TextContainer = styled.div `
  padding-left: 88px;
`

const MiddleContainer = styled.div `
  display: flex;
  margin-bottom: 24px;
  .thumbnail {
    height: 100px;
    width: 100px;
    margin-right: 24px;
  }
`

const HeroMiddleText = styled.div `
    display: flex;
    flex-direction: column;
    overflow-wrap: break-word;
  
`
