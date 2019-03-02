import React, { Component } from 'react'
import $ from 'jquery';
import Header from './header';
import userDetail from './../user.json'
import '../css/profile.css';

 class Profile extends Component {
  constructor() {
		super();
		this.state = {
			posts: []
		};
  }

	componentDidMount() {
		fetch('https://api.unsplash.com/photos/?client_id=e8a1568ebfbe6e258843b98cf7524eef5d286b3cf540345fe13e2f558f9b9165')
			.then(res => res.json())
			.then(data => {
				this.setState({ posts: data });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	}

	render() {
		return (
			<div>
				<Header />
				<div className="user-detail-wrapper">
					<div className="user-pic">
						<img src={userDetail.user.profile_pic_url} alt=""/>
					</div>
					<div className="user-info">
						<div className="details">
							<div className="username">{userDetail.user.username}</div>
							<div className="edit-profile-btn">Edit Profile</div>
							<div className="settings"><img src={require('../img/settings_icon.png')}  alt=""/></div>
						</div>
						<div className="social-share-wrapper">
							<div><span>{userDetail.social_counts.posts}</span><span>Posts</span></div>
							<div><span>{userDetail.social_counts.followers}</span><span>Followers</span></div>
							<div><span>{userDetail.social_counts.following}</span><span>Following</span></div>
						</div>
					</div>
					<div className="nav-tabs">
						<a href="" className="active"><span>Posts</span></a>
						<a href=""><span>Igtv</span></a>
						<a href=""><span>Saved</span></a>
						<a href=""><span>Tagged</span></a>
					</div>
					{this.state.posts.map((post) =>
						<div className="post-image">
							<img src={post.urls.small} alt="image"/>
						</div>
					)}
				</div>
				
			</div>
		);
  }
}

export default Profile