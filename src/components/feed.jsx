import React, { Component } from 'react';
import Posts from '../components/posts';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postAction';
import '../css/post.css';

class Feed extends Component {
    constructor () {
        super();
        this.state = {
            showLike: false
		};
    }
    componentWillMount=()=> {
        this.props.fetchPosts();
    }
    
    toggleLike=(index)=> {
        this.setState({
            showLike: false
        })
    }
    toggleUnlike=(index)=> {
        this.setState({
            showLike: true
        })
    }
    render=()=> {
		return (
            <div>
                <div className="content-wrapper">
                {this.props.posts.map((post, index) =>{
                    return <Posts post={post}/>
                })}
                </div>
            </div>
		);
    }
}

Feed.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps=(state)=> ({
    posts: state.posts.postItem
})
export default connect(mapStateToProps, {fetchPosts})(Feed);