# ES6 module import & export



https://gist.github.com/xgqfrms-GitHub/bbb77383793f7952cb2a3b50bb067f71



How to import / export in React/ES6 ?


http://vincentaudebert.github.io/javascript/react/es6/2016/05/15/import-export-react-es6/


http://stackoverflow.com/questions/33956201/how-to-import-and-export-components-using-react-es6-webpack

http://stackoverflow.com/questions/31852933/why-es6-react-component-works-only-with-export-default

http://stackoverflow.com/a/31853887/5934465


https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export

{{harmony}}



******************************************************************************


https://github.com/danke77/react-native-easy-listview-gridview


https://facebook.github.io/react/docs/react-api.html

https://facebook.github.io/react/blog/2014/10/14/introducing-react-elements.html



https://facebook.github.io/react/docs/react-component.html










******************************************************************************





## import


import React, { Component } from 'react'

import {
    Text,
    View,
    TouchableHighlight
} from 'react-native'



******************************************************************************




## export 

export class GridViewSample {...}

export default class GridViewSample extends Component {...}


export class GridViewSample extends Component {...}



class GridViewSample {...}



export GridViewSample



******************************************************************************

## createElement

https://facebook.github.io/react/docs/react-api.html#createelement


React.createElement(
    type,
    [props],
    [...children]
)



Create and return a new React element of the given type. The type argument can be either a tag name string (such as 'div' or 'span'), or a React component type (a class or a function).

Convenience wrappers around React.createElement() for DOM components are provided by React.DOM. For example, React.DOM.a(...) is a convenience wrapper for React.createElement('a', ...). They are considered legacy, and we encourage you to either use JSX or use React.createElement() directly instead.

Code written with JSX will be converted to use React.createElement(). You will not typically invoke React.createElement() directly if you are using JSX. See React Without JSX to learn more.





******************************************************************************

## ReactElement


https://facebook.github.io/react/blog/2014/10/14/introducing-react-elements.html



Third-party Languages
The signature of a ReactElement is something like this:


{
    type : string | class,
    props : { children, className, etc. },
    key : string | boolean | number | null,
    ref : string | null
}


Languages with static typing that don't need validation (e.g. Om in ClojureScript), and production level compilers will be able to generate these objects inline instead of going through the validation step. This optimization will allow significant performance improvements in React.

******************************************************************************


## The Next Step: ES6 Classes

After 0.12 we'll begin work on moving to ES6 classes. We will still support React.createClass as a backwards compatible API. If you use an ES6 transpiler you will be able to declare your components like this:

export class MyComponent {
    render() {
        ...
    }
};

This upcoming release is a stepping stone to make it as easy as this. Thanks for your support.



******************************************************************************

## React.Component & React.PureComponent

https://facebook.github.io/react/docs/react-api.html

https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes




ECMAScript 2015中引入的 JavaScript 类 是JavaScript 的现有基于原型的继承的语法糖.






******************************************************************************

