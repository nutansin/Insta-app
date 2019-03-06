import React, { Component } from 'react';
import TwitterShare from 'react-twitter-share-link';
import FacebookShare from 'react-facebook-share-link'
import messenger from './../img/facebook-messenger.png'
import '../css/socialShare.css';

class socialShare extends Component {
    constructor() {
        super();
    }
    hidePopup=()=> {
        this.props.hidePopup();
    }
    render() {
        return (
            <div className="social-wrapper">
                <div onClick={this.hidePopup} className="social-share-overlay"></div>
                <div className="social-link-share-wrapper">
                    <div className="title">Share</div>
                    <div className="share-button-wrapper"> 
                        <FacebookShare link={this.props.link}>
                            {link => (
                                <a href={link} target='_blank'><i className="fa fa-facebook"></i> Share to Facebook</a>
                            )}
                        </FacebookShare>
                        <TwitterShare link={this.props.link}>
                            {link => (
                                <a href={link} target='_blank'><i className="fa fa-twitter" aria-hidden="true"></i> Share to Twitter</a>
                            )}
                        </TwitterShare>
                        <FacebookShare link={this.props.link}>
                            {link => (
                                <a href={link} target='_blank'><img src={messenger} alt=""/> Share to messenger</a>
                            )}
                        </FacebookShare>
                    </div>
                </div>
            </div>
        )
    }
}
export default socialShare