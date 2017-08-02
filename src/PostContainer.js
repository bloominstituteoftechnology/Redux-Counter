import React, { Component } from 'react';
import CommentSection from './CommentSection';

export default class PostContainer extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="post-container">
                <div className="thumbnail">
                    <img src={this.props.postData.thumbnailUrl} />
                    <span>{this.props.postData.username}</span>
                </div>
                <div className="image">
                    <img src={this.props.postData.imageUrl} />
                </div>
                <CommentSection comments={this.props.postData.comments} /> 
            </div>
        );
    }
}