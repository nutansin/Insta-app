import React, { Component } from 'react';
import TwitterShare from 'react-twitter-share-link';
import FacebookShare from 'react-facebook-share-link'
import '../css/socialShare.css';

class socialShare extends Component {
    constructor() {
        super();
        this.state = {
            hideClass:''
        }
    }
    componentDidMount(){
        
    }
    hidePopup=()=> {
        this.setState({hideClass:'hidden'})
    }
  render() {
    return (
        <div className={"social-wrapper "+ this.state.hideClass}>
            <div onClick={this.hidePopup} className="social-share-overlay"></div>
            <div className="social-link-share-wrapper">
                <div className="title">Share</div>
                <div className="share-button-wrapper"> 
                    <FacebookShare link={this.props.link}>
                        {link => (
                            <a href={link} target='_blank'><i className="fas fa-facebook-messenger"></i> share to Facebook</a>
                        )}
                    </FacebookShare>
                    <TwitterShare link={this.props.link}>
                        {link => (
                            <a href={link} target='_blank'><i className="fa fa-twitter" aria-hidden="true"></i> share to Twitter</a>
                        )}
                    </TwitterShare>
                    <a href="#"><i className="fas fa-facebook-messenger" aria-hidden="true"></i> share to Messenger</a>
                </div>
            </div>
        </div>
    )
  }
}
export default socialShare