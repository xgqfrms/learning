/*
var React = require('react');
var ReactDOM = require('react-dom');

*/
// Stateless Function Components

var ToDoList = React.createClass({
    render: function (itemText) {
        var createItem = function(){
            return React.DOM.li(null, itemText);
        };
        return React.DOM.ul(null, this.props.items.map(createItem));
    }
});

var ToDoApp = React.createClass({
    getInitialState: function () {
        return {items: [], text: ''}
    },
    onChange: function (e) {
        this.setState(
            {text: e.target.value}
        );
    },
    handleSubmit: function (e) {
        e.preventDefualt();
        var nextItems = this.state.items.contact([this.state.text]);
        var nextText = '';
        this.setState(
            {items: nextItems, text: nextText}
        );
    },
    render: function () {
        return (
            React.DOM.div(
                null,
                React.DOM.h3(null, "ToDo"),
                ToDoList(),
                React.DOM.form( 
                    {onSubmit: this.handleSubmit},
                    React.DOM.input(
                        {
                            onChange: this.onChange,
                            value: this.state.text
                        }
                    ),
                    React.DOM.button(
                        null,
                        "Add #" + (this.state.items.length + 1)
                    )
                )
            )
        );
    }
});


React.renderComponent(
    ToDoApp(null),
    mountNode
);

// new version 

/*


ReactDOM.render(
    <LikeButton />,
    document.getElementById('app')
);

*/
