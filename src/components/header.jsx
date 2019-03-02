import React, { Component } from 'react'
import Profile from './profile'
import Posts from './posts'
import '../css/header.css'
import insta_logo from './../img/insta_logo.png'
import insta_text from './../img/insta_text.png'
import explore from './../img/explore.png'
import profile from './../img/profile.png'
import like from './../img/like.png'


import {
  Link
} from 'react-router-dom';

export class Header extends Component {
  constructor(props) {
    super();
  }

  redirectToProfile() {
    this.props.history.push('/profile');
  }
  render() {
      
    return (
        <div>
            <div className="header-wrapper">
              <div className="logo-wrapper inline-wrapper">
              <Link to="/">
                  <img src={insta_logo} alt=""/>
                  <img src={insta_text} alt=""/>
              </Link>
              </div>
              <div className="search-wrapper inline-wrapper">
                  <input type="text" placeholder="Search"/>
              </div>
              <div className="profile-info-wrapper inline-wrapper">
                  <img src={explore} alt=""/>
                  <img src={like} alt=""/>
                  <Link to="/profileLink">
                  <img src={profile} />
                  </Link>
              </div>
            </div>
        </div>
    )
  }
}
export default Header