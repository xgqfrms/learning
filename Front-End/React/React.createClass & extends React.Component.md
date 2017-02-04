# React.createClass & extends React.Component




*******************************************************************************
*******************************************************************************


## // defualt props ??? 


// ES6 constructor (no getInitialState: function )
// ES6 constructor (no getDefaultProps: function)

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
http://react2.xgqfrms.xyz/docs/reusable-components.html

## 默认 Prop 值
React 支持以声明式的方式来定义 props 的默认值。


var ComponentWithDefaultProps = React.createClass({
    getDefaultProps: function() {
        return {
            value: 'default value'
        };
    },
    /* ... */
});


## State 初始值

var TickTock = React.createClass({
    getInitialState: function() {
        return {
            seconds: 0
        };
    },
    /* ... */
});


## ES6 Classes

// ES6 constructor (no getInitialState: function )
// ES6 constructor (no getDefaultProps: function)

ES6 Class API近似于 React.createClass 除了 getInitialState。

你应该在构造函数里设置你的state，而不是提供一个单独的 getInitialState 方法。
就像 getInitialState 的返回值，你赋给 this.state 的值会被作为组件的初始 state。

另一个不同是 propTypes 和 defaultProps 是在构造函数里被定义为属性，而不是在 class body 里。


export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    },
    tick() {
        this.setState({count: this.state.count + 1});
    },
    render() {
        return (
            <div onClick={this.tick.bind(this)}>
                Clicks: {this.state.count}
            </div>
        );
    }
}

Counter.propTypes = { initialCount: React.PropTypes.number };

Counter.defaultProps = { initialCount: 0 };



+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






*******************************************************************************
*******************************************************************************



