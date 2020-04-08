import React, {Component} from 'react'
import styled from 'styled-components'


class Navigation extends Component {
    state = {
        openMenu : "none"
    }
    openMenu = () => {
         this.state.openMenu === "none" ? this.setState({openMenu: 'block'}) : this.setState({openMenu: 'none'})
    }

    render() {
        return (
            <div onClick={() => this.openMenu()} className="ui icon top left pointing dropdown grey basic circular button">
            <i className="user circle outline icon"></i>
            <div className="menu" style={{display: this.state.openMenu}}>
              <UserContainer>
            <div className="ui icon top left pointing dropdown grey basic circular button">
            <i className="user circle outline icon"></i>
            </div>
            <div>
              <UserName>Shawn Benny</UserName>
              <UserName>@sbenn9210</UserName>
            </div>
            </UserContainer>
              <div className="ui header green item">Become a member</div>
              <div className="ui divider"></div>
              <div className="item">New Story</div>
              <div className="item">Stories</div>
              <div className="item">Series</div>
              <div className="item">Stats</div>
              <div className="ui divider"></div>
              <div className="item">Blogger Partner Program</div>
              <div className="ui divider"></div>
              <div className="item">Reading list</div>
              <div className="item">Publications</div>
              <div className="item">Customize your interests</div>
              <div className="ui divider"></div>
              <div className="item">Profile</div>
              <div className="item">Settings</div>
              <div className="item">Help</div>
              <div className="item">Sign out</div>

            </div>
          </div>
                
        )
    }
}

export default Navigation

const UserContainer = styled.div `
  margin: 10px 0 0 10px;
  display: flex;
`

const UserName = styled.div `
    margin-left: 4px;
    margin-top: 4px;

`