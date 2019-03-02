import React, { Component } from 'react'
import like from './../img/like.png'
import comment_icon from './../img/comment_icon.png'
import download_icon from './../img/download_icon.png'


import '../css/post.css';

class Posts extends Component {
    constructor () {
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
                <div className="content-wrapper">
                    {this.state.posts.map((post) =>
                        <div className="post-wrapper">
                            <div className="header">
                                <div className="profile-pic"><img src={post.user.profile_image.small} alt=""/></div>
                                <div className="username">{post.user.username}</div>
                            </div>
                            <div className="post-image">
                                <img src={post.urls.small} alt={post.user.username}/>
                            </div>
                            <div className="social-share-wrapper">
                                <div>
                                    <img src={like} alt=""/>
                                    <img src={comment_icon} alt=""/>
                                    <img src={download_icon} alt="" onClick={this.redirectToProfile}/>
                                </div>
                                <div className="likes-count">{post.likes} <span>likes</span></div>
                            </div>
                            <div className="post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                    )}
                </div>
            </div>
		);
    }
}
export default Posts;