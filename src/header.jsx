import React, { Component } from 'react'

export class Header extends Component {
  render() {
      
    return (
      <div className="header-wrapper">
        <div className="logo-wrapper">
            <img src={require('./img/insta_logo.png')} alt=""/>
            <img src={require('./img/insta_text.png')} alt=""/>
        </div>
        <div className="search-wrapper">
            <input type="text" placeholder="Search"/>
        </div>
        <div className="profile-info-wrapper">
            <img src="" alt=""/>
            <img src="" alt=""/>
            <img src="" alt=""/>
        </div>
      </div>
    )
  }
}

export default Header