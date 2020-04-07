import React, {Component} from 'react'


class Navigation extends Component {
    state = {
        openMenu : "none"
    }
    openMenu = () => {
         this.state.openMenu === "none" ? this.setState({openMenu: 'block'}) : this.setState({openMenu: 'none'})
    }

    render() {
        return (
            <div onClick={() => this.openMenu()} class="ui icon top left pointing dropdown grey basic circular button">
            <i class="user circle outline icon"></i>
            <div class="menu" style={{display: this.state.openMenu}}>
              <div class="header">Display Density</div>
              <div class="item">Comfortable</div>
              <div class="item">Cozy</div>
              <div class="item">Compact</div>
              <div class="ui divider"></div>
              <div class="item">Settings</div>
              <div class="item">Manage Apps</div>
              <div class="item">Keyboard Shortcuts</div>
              <div class="item">Help</div>
            </div>
          </div>
                
        )
    }
}

export default Navigation