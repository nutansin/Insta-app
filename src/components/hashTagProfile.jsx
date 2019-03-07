import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchHashtagUser} from '../actions/postAction';
import '../css/hashTagProfile.css';

 class HashTagProfile extends Component {
	constructor() {
			super();
			this.state = {
				// posts: [],
				// userInfo:{},
				// hashTagUser:''
			};
	}
	componentDidUpdate (prevProps) {
		let { location: { pathname } } = this.props

		if (prevProps.location.pathname === pathname) return
		// this.routeChanged();
	}

	componentWillMount=()=> {
		var pathname = this.props.location.pathname
		var param = pathname.split('/');
		var query = param[param.length-1];
        this.props.fetchHashtagUser(query);
    }
	routeChanged () {
		// this.fetchTagUser();
		// var pathname = this.props.location.pathname
		// var param = pathname.split('/');
		// var query = param[param.length-1];
        // // this.props.fetchHashtagUser(query);
	}
  
	componentDidMount=()=> {
		// this.fetchTagUser();
	}
	fetchTagUser=()=> {
		// var pathname = this.props.location.pathname
		// var param = pathname.split('/');
		// fetch('https://www.instagram.com/explore/tags/'+(param[param.length-1])+'/?__a=1')
		// .then(res => res.json())
		// .then(data => {
        //     this.setState({posts: data.graphql.hashtag.edge_hashtag_to_top_posts.edges});
        //     this.setState({userInfo: data.graphql.hashtag})
		// })
		// .catch(err => {
		// 	console.log('Error happened during fetching!', err);
		// });
	}

	render=()=> {
		console.log(this.props.user, 'user')
		return (
			<div>
				<div className="user-detail-wrapper">
					<div className="user-pic">
						<img src={this.props.hashTagUser.graphql.hashtag.profile_pic_url} alt=""/>
					</div>
					<div className="user-info">
						<div className="details">
							<div className="username">#{this.props.hashTagUser.graphql.hashtag.name}</div>
                            <button className="follow-btn">Follow</button>
						</div>
						
					</div>
					
                    <div className="post-title">Top Posts</div>
					{this.props.hashTagUser.graphql.hashtag.edge_hashtag_to_top_posts.edges.map((post) =>
						<div className="post-image">
							<img src={post.node.display_url} alt=""/>
						</div>
					)}
				</div>
			
			</div>
		);
  }
}

HashTagProfile.propTypes = {
    fetchHashtagUser: PropTypes.func.isRequired,
    user: PropTypes.array
}

const mapStateToProps=(state)=> ({
    user: state.user.user
});

export default connect(mapStateToProps, {fetchHashtagUser})(HashTagProfile);