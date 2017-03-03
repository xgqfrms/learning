/**
 * @jsx React.DOM
 */

var React = require('react'),
    MyReactComponent = React.createClass({

    // The object returned by this method sets the initial value of this.state
    getInitialState: function(){
        return {};
    },

    // The object returned by this method sets the initial value of this.props
    // If a complex object is returned, it is shared among all component instances      
    getDefaultProps: function(){
        return {};
    },

    // Returns the jsx markup for a component
    // Inspects this.state and this.props create the markup
    // Should never update this.state or this.props
    render: function(){
        return (<div></div>);
    },

    // An array of objects each of which can augment the lifecycle methods
    mixins: [],

    // Functions that can be invoked on the component without creating instances
    statics: {
        aStaticFunction: function(){}
    },

    // -- Lifecycle Methods --

    // Invoked once before first render
    componentWillMount: function(){
        // Calling setState here does not cause a re-render
    },

    // Invoked once after the first render
    componentDidMount: function(){
        // You now have access to this.getDOMNode()
    },

    // Invoked whenever there is a prop change
    // Called BEFORE render
    componentWillReceiveProps: function(nextProps){
        // Not called for the initial render
        // Previous props can be accessed by this.props
        // Calling setState here does not trigger an an additional re-render
    },

    // Determines if the render method should run in the subsequent step
    // Called BEFORE a render
    // Not called for the initial render
    shouldComponentUpdate: function(nextProps, nextState){
        // If you want the render method to execute in the next step
        // return true, else return false
        return true;
    },

    // Called IMMEDIATELY BEFORE a render
    componentWillUpdate: function(nextProps, nextState){
        // You cannot use this.setState() in this method
    },

    // Called IMMEDIATELY AFTER a render
    componentDidUpdate: function(prevProps, prevState){
    },

    // Called IMMEDIATELY before a component is unmounted
    componentWillUnmount: function(){
    }

});

module.exports = MyReactComponent;
