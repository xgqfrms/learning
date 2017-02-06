# ES6 React 



## Babel 

JSX => JS

babel-standalone & type="text/babel"

https://cdn.xgqfrms.xyz/babel/babel.min.js


## webpack 





*******************************************************************************


## ES6 module


How to import / export in React/ES6 ?


http://vincentaudebert.github.io/javascript/react/es6/2016/05/15/import-export-react-es6/




https://discuss.reactjs.org/t/can-react-have-multiple-export-default-exports-in-a-single-module/4863



http://stackoverflow.com/questions/33956201/how-to-import-and-export-components-using-react-es6-webpack



https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export

{{harmony}}



// import Profile from './child-profile';


how to import another child.js file into the main.js file ???





export default class GridViewSample extends Component 


export class GridViewSample extends Component 




<!-- 
import Profile from './child-profile';

<Profile avatar="https://cdn.xgqfrms.xyz/logo/favicon.png" name="React JSX ES6 webpack" />
 -->


*******************************************************************************

# OOP vs OPP

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



*******************************************************************************

# ??? React JSX comment ???

// import LikeButton from './like-unlike'
// var LikeButton = require('./like-unlike');
// /*<LikeButton /> ??? React JSX comment ??? */




const App = () => {
    let name = "React ❤ ES6";
    return (
        <div>
            <p>
                <h1>
                    Hello <mark>{name}</mark>!
                </h1>
            </p>
            <span>
                <mark>Profile</mark> ❤ placeholder!
            </span>
            <mark>??? React JSX comment ???</mark>
        </div>
    );
}

*******************************************************************************


















