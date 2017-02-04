// Comment

// react component skeleton (rcc,tab)

// import React from 'react';

export default class Comment extends React.Component {
/*
    static propTypes = {
        name: React.PropTypes.string,
    };
    constructor(props) {
        super(props);
    }
*/
    render() {
        return (
            <div ="comment">
                <p class="comment-header">
                    {this.props.author}
                </p>
                <p class="comment-body">
                    {this.props.body}
                </p>
                <div class="comment-footer">
                    <a href="#" class="comment-footer-delete">
                        Delete comment
                    </a>
                </div>
            </div>
        );
    }
}
