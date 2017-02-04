// CommentBox

// react component skeleton (rcc,tab)

// import React from 'react';

import Comment from 'comment';

export default class CommentBox extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="comment-box">
                <h3>Comments</h3>
                <h4 class="comment-count">2 comments</h4>
                <div class="comment-list">
                    // comment
                    <Comment />
                    <Comment />
                    <Comment />
                    ...
                </div>
            </div>
        );
    }
}
