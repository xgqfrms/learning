// React.createClass

/*

http://react2.xgqfrms.xyz/docs/reusable-components.html

## ES6 class  

class Counter extends React.Component{
    //
}

export Counter;


export class Counter extends React.Component{
    //
}

## ES5 React.createClass({})

var CheckLink = React.createClass({

*/

var CheckLink = React.createClass({
    render: function() {
        // 这样会把 CheckList 所有的 props 复制到 <a>
        return <a {...this.props}>{'√ '}{this.props.children}</a>;
    }
});

ReactDOM.render(
    <CheckLink href="/checked.html">
        Click here!
    </CheckLink>,
    document.getElementById('example')
);




/*

var CheckLink = {
    render() {
        // 这样会把 CheckList 所有的 props 复制到 <a>
        return (
            <a {...this.props}>{'√ '}{this.props.children}</a>
        );
    }
});

ReactDOM.render(
    <CheckLink href="/checked.html">
        Click here!
    </CheckLink>,
    document.getElementById('example')
);

*/
