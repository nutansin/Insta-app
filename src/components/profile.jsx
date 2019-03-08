import React, { Component } from 'react'
import userDetail from './../user.json';
import Editor from './editor';
import {connect} from 'react-redux';
import {fetchSavedPost} from '../actions/postAction';
import '../css/profile.css';

 class Profile extends Component {
	constructor() {
			super();
			this.state = {
				showEditor: false
			};
	}
	
	toggleEditor=()=> {
		this.setState({showEditor: !this.state.showEditor})
	}

	render=()=> {
		return (
			<div>
				<div className="profile-detail-wrapper">
					<div className="user-pic">
						<img src={userDetail.user.profile_pic_url} alt=""/>
					</div>
					<div className="user-info">
						<div className="details">
							<div className="username">{userDetail.user.username}</div>
							<div className="upload-btn" onClick={this.toggleEditor}>Upload</div>
							<div className="settings"><img src={require('../img/settings_icon.png')}  alt=""/></div>
						</div>
						<div className="social-share-wrapper">
							<div><span>{userDetail.social_counts.posts}</span><span>Posts</span></div>
							<div><span>{userDetail.social_counts.followers}</span><span>Followers</span></div>
							<div><span>{userDetail.social_counts.following}</span><span>Following</span></div>
						</div>
					</div>
					<div className="nav-tabs">
						<a href="#" className="active"><span>Posts</span></a>
						<a href="#"><span>Igtv</span></a>
						<a href="#"><span>Saved</span></a>
						<a href="#"><span>Tagged</span></a>
					</div>
					{this.props.savedPost ? this.props.savedPost.map((post) =>
						<div className="post-image">
							<img src={post.link} alt="image"/>
						</div>
					):null}
				</div>
				{this.state.showEditor ? <Editor hideEditor={this.toggleEditor}/>:null}
			</div>
		);
  }
}

const mapStateToProps=(state)=> ({
    savedPost: state.savedPost.post
})
export default connect(mapStateToProps, {fetchSavedPost})(Profile);