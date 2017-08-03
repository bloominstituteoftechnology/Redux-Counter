import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findDOMNode } from 'react-dom';
import { addComment } from '../actions';

class CommentSection extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const text = findDOMNode(this.refs.commentInput).value;
        const newComment = {
            postIndex: this.props.postIndex,
            body: {
                username: 'Sean',
                text
            }
        };
        this.props.dispatch(addComment(newComment));
        findDOMNode(this.refs.commentInput).value = '';
    };

    render() {
        return (
            <div className="comment-section">
                {this.props.comments.map((comment, i) =>
                    <div className="comment" key={i}>
                        <div className="comment-user"><b>{comment.username}</b></div>
                        <div className="comment-text">{comment.text}</div>
                    </div>
                )}
                 <div className="comment-input">
                    <input type="text" placeholder="..." ref="commentInput" />
                        {' '}
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}

export default connect()(CommentSection);