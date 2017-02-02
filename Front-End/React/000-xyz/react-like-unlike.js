/*
var React = require('react');
var ReactDOM = require('react-dom');

*/
// Stateless Function Components

var LikeButton = React.createClass({
    getInitialState: function () {
        return {liked: false}
    },
    handleClick: function () {
        this.setState(
            {liked: !this.state.liked}
        );
    },
    render: function () {
        var text = this.state.liked ? "like" : "unlike";
        return (
            <p onClick={}>
                You {text} this.
                <mark>Click to toggle!</mark>
            </p>
        );
    }
});

/*
ReactDOM.render(
    <LikeButton />,
    document.getElementById('app')
);
*/
