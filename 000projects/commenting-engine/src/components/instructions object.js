// http://codepen.io/xgqfrms/pen/pRWjGL


var componentBlueprint = {
    render: function () {
        return <h1>Hello world & instructions object </h1>;
    }
};

var MyComponentClass = React.createClass(componentBlueprint);

ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('root')
);


/*

var MyComponentClass = React.createClass({
    render: function () {
        return (
            <h1>Hello world & instructions object </h1>
        );
    }
});

ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('root')
);




*/
