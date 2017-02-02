# ES6 React 



## Babel 

JSX => JS

babel-standalone & type="text/babel"

https://cdn.xgqfrms.xyz/babel/babel.min.js


## webpack 





??? 

// import Profile from './child-profile';


how to import another child.js file into the main.js file ???

ES6 module

<!-- 
import Profile from './child-profile';

<Profile avatar="https://cdn.xgqfrms.xyz/logo/favicon.png" name="React JSX ES6 webpack" />
 -->



## class ??? extends React.Component  

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

## ??? = React.createClass  

var App = React.createClass({
    getInitialState: function () {
        return { title: 'Best App' }
    },
    render: function () {
        return (
            <div>
                <h1>
                    Hullo and, "Welcome to The Newzz," "On Line!"
                </h1>
                <Greeting name="xgqfrms" signedIn={true}/>
                <article>
                    Latest newzz:  where is my phone?
                </article>
            </div>
        );
    }
});












