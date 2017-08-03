import React, { Component } from 'react';
import CommentSection from '../components/CommentSection';

class PostContainer extends Component {
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
                <CommentSection postIndex={this.props.index} comments={this.props.postData.comments} /> 
            </div>
        );
    }
}

export default PostContainer;