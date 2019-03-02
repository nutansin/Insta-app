import React, { Component } from 'react'
import $ from 'jquery';
import Header from './header';

 class Profile extends Component {
  constructor() {
		super();
		this.state = {
			posts: []
		};
	}
	fetchUser() {
		$.getJSON("user.json", function (data) {
			$.each(data, function (index, value) {
			   console.log(value);
			});
		});
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
				{this.state.posts.map((post) =>
					<div className="main-header">
						<div className="inner">
							<h1 className="main-title">ImageSearch</h1>
						</div>
					</div>
				)}
				
			</div>
		);
  }
}

export default Profile