import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchHashtagUser} from '../actions/postAction';
import '../css/hashTagProfile.css';

 class HashTagProfile extends Component {
	constructor() {
		super();
	}
	componentDidUpdate (prevProps) {
		let { location: { pathname } } = this.props

		if (prevProps.location.pathname === pathname) return
		this.routeChanged();
	}

	componentWillMount=()=> {
        this.props.fetchHashtagUser(this.getTagParam());
	}
	routeChanged () {
        this.props.fetchHashtagUser(this.getTagParam());
	}
	getTagParam=()=> {
		var pathname = this.props.location.pathname
		var param = pathname.split('/');
		var query = param[param.length-1];
		return query;
	}

	render=()=> {
		return (
			<div>
				{this.props.hashTagUser[0] ? <div className="user-detail-wrapper">
					<div className="user-pic">
						<img src={this.props.hashTagUser[0].graphql.hashtag.profile_pic_url} alt=""/>
					</div>
					<div className="user-info">
						<div className="details">
							<div className="username">#{this.props.hashTagUser[0].graphql.hashtag.name}</div>
                            <button className="follow-btn">Follow</button>
						</div>	
					</div>
					
                    <div className="post-title">Top Posts</div>
					{this.props.hashTagUser[0].graphql.hashtag.edge_hashtag_to_top_posts.edges.map((post) =>
						<div className="post-image">
							<img src={post.node.display_url} alt=""/>
						</div>
					)}
				</div>:null}
			</div>
		);
  }
}

HashTagProfile.propTypes = {
    fetchHashtagUser: PropTypes.func.isRequired,
    hashTagUser: PropTypes.array
}

const mapStateToProps=(state)=> ({
    hashTagUser: state.tagUser.user
});

export default connect(mapStateToProps, {fetchHashtagUser})(HashTagProfile);