import React, { Component } from 'react';
import ShareLink from 'react-twitter-share-link';
import SocialShare from "../components/socialShare";
import unlike from './../img/unlike.png'
import like from './../img/like_icon.png'
import comment_icon from './../img/comment_icon.png'
import download_icon from './../img/download_icon.png'
import '../css/post.css';

class Posts extends Component {
    constructor () {
        super();
        this.state = {
            // posts: [],
            showLike: false,
            likeCount: 0,
            showSharePopup: false,
            sharePopupClass:''
		};
    }

    componentDidMount(){
        this.setState({
            likeCount: this.props.post.likes
        }) 
    }
    
    toggleLikeAndCountDec=(index)=> {
        this.setState({
            showLike: false,
            likeCount: --this.state.likeCount
        })
    }
    toggleUnlikeAndCountInc=(index)=> {
        this.setState({
            showLike: true,
            likeCount: this.state.likeCount+1
        })
    }
    sharePopupShow=()=> {
        this.setState({
            showSharePopup: true,
            sharePopupClass:'show'
        }) 
    }
    render=()=> {
        var likeUnlikeImg;
        
         if(this.state.showLike) {
            likeUnlikeImg = <img src={like} alt="" onClick={this.toggleLikeAndCountDec}/>
        }
        else {
            likeUnlikeImg = <img src={unlike} alt="" onClick={this.toggleUnlikeAndCountInc}/>
        }

        // var sharePopupClass = this.state.showSharePopup ? 'show' : 'hidden';
		return (
            
            <div>
                <div className="post-wrapper">
                    <div className="header">
                        <div className="profile-pic"><img src={this.props.post.user.profile_image.small} alt=""/></div>
                        <div className="user-info">
                            <div className="username">{this.props.post.user.username}</div>
                            <div className="location">{this.props.post.user.location}</div>
                        </div>
                    </div>
                    <div className="post-image">
                        <img src={this.props.post.urls.small} alt={this.props.post.user.username}/>
                    </div>
                    <div className="social-share-wrapper">
                        <div>
                            {likeUnlikeImg}
                            <img src={comment_icon} alt=""/>
                            <img src={download_icon} alt="" onClick={this.sharePopupShow}/>
                        </div>
                        
                        <div className="likes-count">{this.state.likeCount} <span>likes</span></div>
                    </div>
                    <div className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    {this.state.showSharePopup?<SocialShare className={this.state.sharePopupClass} link={this.props.post.links.self}/>:null }
                    
                </div>
                </div>
		);
    }
}
export default Posts;