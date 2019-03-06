import React, { Component } from 'react';
import Posts from '../components/posts';
import '../css/post.css';

class Feed extends Component {
    constructor () {
        super();
        this.state = {
            posts: [],
            showLike: false
		};
    }
    componentDidMount=()=> {
		fetch('https://api.unsplash.com/photos/?client_id=e8a1568ebfbe6e258843b98cf7524eef5d286b3cf540345fe13e2f558f9b9165')
			.then(res => res.json())
			.then(data => {
				this.setState({ posts: data });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
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
                {this.state.posts.map((post, index) =>{
                    return <Posts post={post}/>
                })}
                </div>
            </div>
		);
    }
}
export default Feed;