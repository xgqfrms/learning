// CommentBox

// react component skeleton (rcc,tab)

// import React from 'react';

import Comment from 'comment';

export default class CommentBox extends React.Component {
/*
    static propTypes = {
        name: React.PropTypes.string,
    };
*/
    constructor(props) {
        super(props);
        this.state = {
            showComments: false
        };
    }
    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show comments';
    if (this.state.showComments){
        buttonText = 'Hide comments';
        commentNodes = <div className="comment-list">{comments}</div>;
    }
    _handleClick() {
        this.setState({
            showComments: !this.state.showComments
        });
    }
    render() {
        return (
            <div class="comment-box">
                <h3>Comments</h3>
                <button onClick={this._handleClick.bind(this)}>
                    {buttonText}
                </button>
                <h4 class="comment-count">
                    {this._getCommentsTitle(comments.length)}
                </h4>
                {commentNodes}
            </div>
        );
    }
    _getComments() {
        const commentList = [
            { id: 1, author: 'Morgan McCircuit', body: 'Great picture!' },
            { id: 2, author: 'Bending Bender', body: 'Excellent stuff' }
        ];
        return commentList.map((comment) => {
            return (
                <Comment 
                    author={comment.author}
                    body={comment.body}
                    key={comment.id} />
            );
        });
    }
    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'No comments yet';
        } else if (commentCount === 1) {
            return '1 comment';
        } else {
            return `${commentCount} comments`;
        }
    }
}
