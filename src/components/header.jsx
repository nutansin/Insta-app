import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { render, shallow } from 'enzyme';
import $ from 'jquery';
import { Redirect, Link, withRouter } from 'react-router-dom'
import classnames from 'classnames';
import userDetail from './../user.json';
import '../css/header.css'
import insta_logo from './../img/insta_logo.png'
import insta_text from './../img/insta_text.png'
import explore from './../img/explore.png'
import profile from './../img/profile.png'
import unlike from './../img/unlike.png'


export class Header extends Component {
  constructor() {
    super();
    this.listRef = React.createRef();
    this.state = {
      userName: '',
      value: '',
      tags: [],
      redirectToProfile: false,
      cursor: 0,
      result: [],
      listSelected: null,
      next: null,
      $tagList:[],
      activeTag:''
    }
  }

  submitTagForm=(event)=> {
    this.props.history.push(this.state.activeTag.attr('href'));
  }

  tagChange=(event)=> {
    this.setState({value: event.target.value});
  }

  resetList=()=> {
    this.setState({ tags: [] });
  }

  fetchTagSuggestion=(event)=> {
    fetch('https://www.instagram.com/web/search/topsearch/?context=blended&query='+encodeURIComponent(this.state.value)+'&rank_token=0.43305520620017&include_reel=true')
    .then(res => res.json())
    .then(data => {
      this.setState({ tags: data.hashtags });
    })
    .catch(err => {
      console.log('Error happened during fetching!', err);
    });
  } 

  navigateList=(e)=> {
    if(e.which === 40) {

        if(this.state.listSelected) {
          this.state.listSelected.removeClass('selected');
            this.state.next = this.state.listSelected.next();
            if(this.state.next.length > 0) {
              this.state.listSelected = this.state.next.addClass('selected');
            } else {
              this.state.listSelected = this.state.$tagList.eq(0).addClass('selected');
            }
        } else {
          this.state.listSelected = this.state.$tagList.eq(1).addClass('selected');
        }
    } else if(e.which === 38) {
        if(this.state.listSelected) {
            this.state.listSelected.removeClass('selected');
            this.state.next = this.state.listSelected.prev();
            if(this.state.next.length > 0) {
              this.state.listSelected = this.state.next.addClass('selected');
            } else {
              this.state.listSelected = this.state.$tagList.last().addClass('selected');
            }
        } else {
          this.state.listSelected = this.state.$tagList.last().addClass('selected');
        }
    }
  }

  render=()=> {
        this.state.$tagList = $('.tag-list'); 
        this.state.activeTag = $('.tag-list.selected'); 
        this.state.listSelected =  this.state.activeTag; 

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
                <form onSubmit={this.submitTagForm}>
                    <input type="text" value={this.state.value} onChange={this.tagChange} onKeyUp={this.fetchTagSuggestion} onKeyDown={this.navigateList} placeholder="Search"/>
                    <input type="submit" value="Submit"/>
                    <div className="tag-suggestion-wrapper">
                        {this.state.tags.map((tag, index) =>
                              <Link to={'/explore/tags/'+tag.hashtag.name} onClick={this.resetList} className={ classnames('tag-list', { selected: index === 0 })}>
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
                  <img src={unlike} alt=""/>
                  <Link to={'/profile/'+userDetail.user.username}>
                    <img src={profile} alt="" />
                  </Link>
              </div>
            </div>
        </div>
    )
  }
}
export default withRouter(Header);