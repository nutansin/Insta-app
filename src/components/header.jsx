import React, { Component } from 'react'
import $ from 'jquery';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from 'react-router-dom/Route';
import Profile from './profile';
import Posts from './posts';
import '../css/header.css';

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
              {/* <Link to="/"> */}
                  <img src={require('../img/insta_logo.png')} alt=""/>
                  <img src={require('../img/insta_text.png')} alt=""/>
              {/* </Link> */}
              </div>
              <div className="search-wrapper inline-wrapper">
                  <input type="text" placeholder="Search"/>
              </div>
              <div className="profile-info-wrapper inline-wrapper">
                  <img src={require('../img/explore.png')} alt=""/>
                  <img src={require('../img/like.png')} alt=""/>
                  {/* <Link to="/profile"> */}
                  <img src={require('../img/profile.png')} alt=""/>
                  {/* </Link> */}
              </div>
            </div>
        </div>
    )
  }
}
export default Header