import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

export default class CommentSection extends Component {
    constructor(props) {
        super();

        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const text = findDOMNode(this.refs.commentInput).value;
        const newComment = {
            username: 'Sean',
            text
        };

        this.setState({
            comments: [...this.state.comments, newComment]
        });
        findDOMNode(this.refs.commentInput).value = '';
    };

    render() {
        return (
            <div className="comment-section">
                {this.state.comments.map((comment, i) =>
                    <div className="comment" key={i}>
                        <div className="comment-user">{comment.username}</div>
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