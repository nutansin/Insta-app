import React, { Component } from 'react';
import Posts from '../components/posts';
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
                {this.props.posts ? this.props.posts.map((post, index) =>{
                    return <Posts post={post}/>
                }):null}
                </div>
            </div>
		);
    }
}

const mapStateToProps=(state)=> ({
    posts: state.posts.postItem
})
export default connect(mapStateToProps, {fetchPosts})(Feed);