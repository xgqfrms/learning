/*

http://react2.xgqfrms.xyz/docs/reusable-components.html

## ES6 class & import & export  

class Counter extends React.Component{
    //
}

export Counter;


export class Counter extends React.Component{
    //
}

*/




export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    }
    tick() {
        this.setState({count: this.state.count + 1});
    }
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

/*

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    }
    tick() {
        this.setState({count: this.state.count + 1});
    }
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

export Counter;

*/
