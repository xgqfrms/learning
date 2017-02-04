// CommentForm



// import React from 'react';

export default class CommentForm extends React.Component {
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
            <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                <label>Join the discussion</label>
                <div className="comment-form-fields">
                    <input placeholder="Name:" />
                    <textarea placeholder="Comment:"></textarea>
                </div>
                <div className="comment-form-actions">
                    <button type="submit">
                        Post comment
                    </button>
                </div>
            </form>
        );
    }
    _handleSubmit(event) {
        event.preventDefault();
    }
}
