# react2 API docs codes bugs :




+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

http://react2.xgqfrms.xyz/docs/reusable-components.html#es6-classes

react2 API docs codes bugs :


*************************
{ a b c } missing "," 


{ a, b, c }

*************************

## ES6 Classes

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




+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
