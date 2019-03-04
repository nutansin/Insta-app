import React, { Component } from 'react'
import $ from 'jquery';
import Profile from './profile'
import Posts from './posts'
import userDetail from './../user.json';
import '../css/header.css'
import insta_logo from './../img/insta_logo.png'
import insta_text from './../img/insta_text.png'
import explore from './../img/explore.png'
import profile from './../img/profile.png'
import like from './../img/like.png'
import { Redirect, Link } from 'react-router-dom'

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      value: '',
      tags: [],
      redirectToProfile: false
    }
  }

  submitTagForm=(event)=> {
    event.preventDefault();
    this.setState({
      redirectToProfile: true
    })
  }

  tagChange=(event)=> {
    this.setState({value: event.target.value});
  }

  renderRedirect=()=> {
    if (this.state.redirect) {
      return <Redirect to={this.state.value} />
    }
  }

  resetList=()=> {
    this.setState({ tags: [] });
  }

  keyPress=(event)=> {
    fetch('https://www.instagram.com/web/search/topsearch/?context=blended&query='+encodeURIComponent(this.state.value)+'&rank_token=0.43305520620017&include_reel=true')
    .then(res => res.json())
    .then(data => {
      this.setState({ tags: data.hashtags });
    })
    .catch(err => {
      console.log('Error happened during fetching!', err);
    });
  } 
  render() {
    console.log("userDetail.user.username ",userDetail.user.username)
    return (
        <div>
            {/* {this.renderRedirect()} */}
            <div className="header-wrapper">
              <div className="logo-wrapper inline-wrapper">
              <Link to="/">
                  <img src={insta_logo} alt=""/>
                  <img src={insta_text} alt=""/>
              </Link>
              </div>
              <div className="search-wrapper inline-wrapper">
                <form onSubmit={this.submitTagForm}>
                    <input type="text" value={this.state.value} onChange={this.tagChange} onKeyUp={this.keyPress} placeholder="Search"/>
                    <input type="submit" value="Submit"/>
                    <div className="tag-suggestion-wrapper">
                        {this.state.tags.map((tag) =>
                              <Link to={'/explore/tags/'+tag.hashtag.name} onClick={this.resetList}>
                                  <div>#</div>
                                  <div>
                                      <span>#{tag.hashtag.name}</span>
                                      <span>{tag.hashtag.media_count} posts</span>
                                  </div>
                                  
                              </Link>
                        )}
                    </div>
                </form> 
              </div>
              <div className="profile-info-wrapper inline-wrapper">
                  <img src={explore} alt=""/>
                  <img src={like} alt=""/>
                  {/*  username need to get from the redux store */}
                  <Link to={'/profile/'+userDetail.user.username}>
                  <img src={profile} />
                  </Link>
              </div>
            </div>
        </div>
    )
  }
}
export default Header