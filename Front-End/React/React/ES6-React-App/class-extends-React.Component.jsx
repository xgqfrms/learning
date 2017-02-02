import React from 'react';
import ReactDOM from 'react-dom';


class HelloMessage extends React.Component {
    render() {
        return(
            <div>
                <h1>
                    Hello <mark>{this.props.name}</mark>
                </h1>
                <h2> Age : {this.props.age}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <HelloMessage name="xgqfrms-2017(react-jsx)" age="23" />, 
    document.getElementById('container')
);

/*

<HelloMessage name="xgqfrms-2017(react-jsx)"/>, 

<HelloMessage name="xgqfrms-2017(react-jsx)"/>, 

*/
