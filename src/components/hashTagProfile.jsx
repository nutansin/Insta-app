import React, { Component } from 'react'
import $ from 'jquery';
import '../css/hashTagProfile.css';

 class HashTagProfile extends Component {
  constructor() {
		super();
		this.state = {
            posts: [],
            userInfo:{}
		};
  }

	componentDidMount() {
		var pathname = this.props.location.pathname
		pathname = pathname.substring(1);
		var param = pathname.split('/');
		
		fetch('https://www.instagram.com/explore/tags/'+(param[param.length-1])+'/?__a=1')
		.then(res => res.json())
		.then(data => {
            this.setState({posts: data.graphql.hashtag.edge_hashtag_to_top_posts.edges});
            this.setState({userInfo: data.graphql.hashtag})
            console.log(this.state.userInfo, 'count');
		})
		.catch(err => {
			console.log('Error happened during fetching!', err);
		});
	}

	render() {
		
		return (
			<div>
				<div className="user-detail-wrapper">
					<div className="user-pic">
						<img src={this.state.userInfo.profile_pic_url} alt=""/>
					</div>
					<div className="user-info">
						<div className="details">
							<div className="username">#{this.state.userInfo.name}</div>
                            <button className="follow-btn">Follow</button>
							{/* <div className="upload-btn" onClick={this.loadUploader}>Upload</div> */}
							{/* <div className="settings"><img src={require('../img/settings_icon.png')}  alt=""/></div> */}
						</div>
						
					</div>
					
                    <div className="post-title">Top Posts</div>
					{this.state.posts.map((post) =>
						<div className="post-image">
							<img src={post.node.display_url} alt="image"/>
						</div>
					)}
				</div>
			
			</div>
		);
  }
}

export default HashTagProfile