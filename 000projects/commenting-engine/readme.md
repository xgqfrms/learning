# commenting engine  





$ npm start  

$ npm dist

$ npm serve:dist  

$ npm serve  


http://localhost:8000/webpack-dev-server/

http://localhost:8000/


# generator-react-webpack  


https://github.com/react-webpack-generators/generator-react-webpack#readme


"dist": "npm run copy & webpack --env=dist",
"lint": "eslint ./src",

"serve": "node server.js --env=dev",
"serve:dist": "node server.js --env=dist",
"start": "node server.js --env=dev",


*******************************************************************************
*******************************************************************************


## generator-react-webpack 


$ yo react-webpack




https://github.com/react-webpack-generators/generator-react-webpack#readme


## yeoman  


# Make sure both is installed globally

$ npm install -g yo
$ npm install -g generator-react-webpack


# Create a new directory, and `cd` into it:

$ mkdir my-new-project && cd my-new-project


# Run the generator

$ yo react-webpack

$ scss
$ N

$ yarn install ???

*******************************************************************************
???

index.html ? momery : cache 

<script type="text/javascript" src="/assets/app.js"></script>

??? 

*******************************************************************************

# After setup of course :)

$ cd my-new-project
$ yo react-webpack:component my/namespaced/components/name


# Generating new stateless functional components

$ yo react-webpack:component my/namespaced/components/name --stateless


*******************************************************************************
*******************************************************************************


## npm script comand error (package.json)

??? npm run ???

***************************************
# error  
$ npm serve:dist

# OK  
$ npm run serve:dist

# webpack build ./dist/
$ npm run dist

***************************************


Usage: npm <command>

where <command> is one of:
    access, adduser, bin, bugs, c, cache, completion, config,
    ddp, dedupe, deprecate, dist-tag, docs, edit, explore, get,
    help, help-search, i, init, install, install-test, it, link,
    list, ln, login, logout, ls, outdated, owner, pack, ping,
    prefix, prune, publish, rb, rebuild, repo, restart, root,
    run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, team, test, tst, un, uninstall,
    unpublish, unstar, up, update, v, version, view, whoami

npm <cmd> -h     quick help on <cmd>
npm -l           display full usage info
npm help <term>  search for help on <term>
npm help npm     involved overview

Specify configs in the ini-formatted file:
    C:\Users\xray\.npmrc
or on the command line via: npm <command> --key value
Config info can be viewed via: npm help config

npm@4.0.5 C:\Users\xray\AppData\Roaming\npm\node_modules\npm



"scripts": {
    "clean": "rimraf dist/*",
    "copy": "copyfiles -f ./src/index.html ./src/favicon.ico ./dist",
    "dist": "npm run copy & webpack --env=dist",
    "lint": "eslint ./src",
    "posttest": "npm run lint",
    "release:major": "npm version major && npm publish && git push --follow-tags",
    "release:minor": "npm version minor && npm publish && git push --follow-tags",
    "release:patch": "npm version patch && npm publish && git push --follow-tags",
    "serve": "node server.js --env=dev",
    "serve:dist": "node server.js --env=dist",
    "start": "node server.js --env=dev",
    "test": "karma start",
    "test:watch": "karma start --autoWatch=true --singleRun=false"
},







*******************************************************************************

--env=dev & --env=dist

"serve": "node server.js --env=dev",
"serve:dist": "node server.js --env=dist",

??? npm run ???

***************************************
# error 
$ npm serve
$ npm serve:dist

# OK  
$ npm run serve
$ npm run serve:dist

***************************************



*******************************************************************************

# webpack build ./dist/
$ npm run dist


1. Chrome Apps: static web server

chrome://apps/
Web Server for Chrome



2. browser-sync: G:\wwwRoot\learning\Front-End-Tools\Browser-sync

$ npm i -g browser-sync

$ npm i -S browser-sync

## run dist dir (auto open http://localhost:3000/)

```sh
$ cd dist

$ browser-sync start --server --files "./*.*"

``` 



3. express-simple-sever.js

$ node express-simple-sever.js


// TypeError: path must be absolute or specify root to res.sendFile

app.get('/', function(req, res){
    res.sendFile('http://localhost:3000/dist/index.html');
});

// bugs ???

*******************************************************************************

# Composition vs Inheritance

https://facebook.github.io/react/docs/composition-vs-inheritance.html


composition











Props and composition give you all the flexibility you need to customize a component's look and behavior in an explicit and safe way.


Remember that components may accept arbitrary props, including primitive values, React elements, or functions.






*******************************************************************************
https://facebook.github.io/react/docs/components-and-props.html

# Components and Props


## Functional and Class Components

// components "functional" 

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

// ES6 class

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

https://facebook.github.io/react/docs/state-and-lifecycle.html


## Rendering a Component

const element = <div />;

const element = <Welcome name="Sara" />;




function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

ReactDOM.render(
    element,
    document.getElementById('root')
);


## Composing Components

Components can refer to other components in their output.


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


## Extracting Components


Don't be afraid to split components into smaller components.


function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}


function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar), or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be a reusable component.


## Props are Read-Only

// pure function (Functional Programming)

function sum(a, b) {
    return a + b;
}

https://facebook.github.io/react/docs/components-and-props.html#props-are-read-only

https://en.wikipedia.org/wiki/Pure_function

React is pretty flexible but it has a single strict rule:

All React components must act like pure functions with respect to their props.




*******************************************************************************
https://facebook.github.io/react/docs/state-and-lifecycle.html

# State

State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.












*******************************************************************************
https://facebook.github.io/react/docs/thinking-in-react.html

# Thinking in React



JSON API

[
    {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football"
    },
    {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball"
    },
    {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball"
    },
    {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch"
    },
    {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5"
    },
    {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7"
    }
];

## Step 1: Break The UI Into A Component Hierarchy


## single responsibility principle

https://en.wikipedia.org/wiki/Single_responsibility_principle


A component should ideally only do one thing.
If it ends up growing, it should be decomposed into smaller subcomponents.



FilterableProductTable
    SearchBar
    ProductTable
        ProductCategoryRow
        ProductRow


## Step 2: Build A Static Version in React 


## Props vs State

https://facebook.github.io/react/docs/interactivity-and-dynamic-uis.html



## Step 3: Identify The Minimal (but complete) Representation Of UI State

So finally, our state is:

The search text the user has entered
The value of the checkbox

## Step 4: Identify Where Your State Should Live


## Step 5: Add Inverse Data Flow



*******************************************************************************
https://facebook.github.io/react/docs/react-without-jsx.html

# React Without JSX

## syntactic sugar 

Each JSX element is just syntactic sugar for calling 

React.createElement(component, props, ...children) 


class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.toWhat}</div>;
    }
}

ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById('root')
);

// can be compiled to this code that does not use JSX:

class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}

ReactDOM.render(
    React.createElement(Hello, {toWhat: 'World'}, null),
    document.getElementById('root')
);


## online Babel compiler  

https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-0&code=function%20hello()%20%7B%0A%20%20return%20%3Cdiv%3EHello%20world!%3C%2Fdiv%3E%3B%0A%7D

The component can either be provided as a string, or as a subclass of React.Component, or a plain function for stateless components.

## shorthand

const e = React.createElement;

ReactDOM.render(
  e('div', null, 'Hello World'),
  document.getElementById('root')
);



*******************************************************************************
https://facebook.github.io/react/docs/react-without-es6.html


http://react2.xgqfrms.xyz/docs/reusable-components.html#no-autobinding




# React Without ES6  

Normally you would define a React component as a plain JavaScript class:

The API of ES6 classes is similar to React.createClass with a few exceptions.

// ES6 plain JavaScript class

class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}


If you don't use ES6 yet, you may use the React.createClass helper instead:

// React.createClass (React helper)


var Greeting = React.createClass({
    render: function() {
        return <h1>Hello, {this.props.name}</h1>;
    }
});


## Declaring Prop Types and Default Props


class Greeting extends React.Component {
    // ...
}

Greeting.propTypes = {
    name: React.PropTypes.string
};

Greeting.defaultProps = {
    name: 'Mary'
};


With React.createClass(), you need to define propTypes as a property on the passed object, and getDefaultProps() as a function on it:


var Greeting = React.createClass({
    propTypes: {
        name: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            name: 'Mary'
        };
    },

    // ...
});


## Setting the Initial State


In ES6 classes, you can define the initial state by assigning this.state in the constructor:

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: props.initialCount};
    }
    // ...
}


With React.createClass(), you have to provide a separate getInitialState method that returns the initial state:

var Counter = React.createClass({
    getInitialState: function() {
        return {count: this.props.initialCount};
    },
    // ...
});


## Autobinding  

// ES6 (.bind(this))

http://react2.xgqfrms.xyz/docs/reusable-components.html#no-autobinding



constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
    // This line is important!
    this.handleClick = this.handleClick.bind(this);
}

// React.createClass()

getInitialState: function() {
    return {message: 'Hello!'};
},

handleClick: function() {
    alert(this.state.message);
},

// ES6 (experimental Class Properties)

constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
}

// WARNING: this syntax is experimental!
// Using an arrow here binds the method:

handleClick = () => {
    alert(this.state.message);
}


https://babeljs.io/docs/plugins/transform-class-properties/

If you'd rather play it safe, you have a few options:

1. Bind methods in the constructor.
2. Use arrow functions, e.g. onClick={(e) => this.handleClick(e)}.
3. Keep using React.createClass().


## Mixins


Note:
ES6 launched without any mixin support. 
Therefore, there is no support for mixins when you use React with ES6 classes.



https://en.wikipedia.org/wiki/Cross-cutting_concern


https://facebook.github.io/react/docs/top-level-api.html#react.createclass


https://facebook.github.io/react/docs/working-with-the-browser.html#component-lifecycle





*******************************************************************************
http://react2.xgqfrms.xyz/docs/interactivity-and-dynamic-uis.html

http://react2.xgqfrms.xyz/docs/displaying-data.html


# 动态交互式用户界面

var LikeButton = React.createClass({
    getInitialState: function() {
        return { liked: false };
    },
    handleClick: function(event) {
        this.setState({ liked: !this.state.liked });
    },
    render: function() {
        var text = this.state.liked ? 'liked' : 'haven\'t liked';
        return ( <p onClick = { this.handleClick }>
            You { text }
            this.Click to toggle. </p>
        );
    }
});

ReactDOM.render(
    <LikeButton / >,
    document.getElementById('example')
);



https://www.w3.org/TR/DOM-Level-3-Events/

事件处理与合成事件（Synthetic Events）

幕后原理：自动绑定（Autobinding）和事件代理（Event Delegation）


自动绑定（Autobinding）

http://react2.xgqfrms.xyz/docs/reusable-components.html#no-autobinding


事件代理（Event Delegation）

https://davidwalsh.name/event-delegate


组件其实是状态机（State Machines）



## State 工作原理

setState(data, callback)

常用的通知 React 数据变化的方法是调用 setState(data, callback)。
这个方法会合并（merge） data 到 this.state，并重新渲染组件。
重新渲染完成后，调用可选的 callback 回调。
大部分情况下不需要提供 callback，因为 React 会负责把界面更新到最新状态。

??? Redux  

## props vs state

大部分组件的工作应该是从 props 里取数据并渲染出来。
但是，有时需要对用户输入、服务器请求或者时间变化等作出响应，这时才需要使用 State。

## stateless (stateful父组件 把它的状态通过 props 传给 stateless子组件)


尝试把尽可能多的组件无状态化。 这样做能隔离 state，把它放到最合理的地方，也能减少冗余，同时易于解释程序运作过程。

常用的模式是创建多个只负责渲染数据的无状态（stateless）组件，在它们的上层创建一个有状态（stateful）父组件并把它的状态通过 props 传给子组件。
这个有状态的组件封装了所有用户的交互逻辑，而这些无状态组件则负责声明式地渲染数据。



State 应该包括那些可能被组件的事件处理器改变并触发用户界面更新的数据。



this.state 应该仅包括能表示用户界面状态所需的最少数据。

因此，它不应该包括：计算所得数据, React 组件, 基于 props 的重复数据.





*******************************************************************************
http://react2.xgqfrms.xyz/docs/jsx-spread.html

JSX 展开属性



如果你事先知道组件需要的全部 Props（属性），JSX 很容易地这样写：

var component = <Component foo={x} bar={y} />;

Props 应该被认为是不可变的。(initial values)
在别处修改 props 对象可能会导致预料之外的结果，所以原则上这将是一个冻结的对象。


state dynamic values

## 展开属性（Spread Attributes）

现在你可以使用 JSX 的新特性 - 展开属性：

var props = {};
props.foo = x;
props.bar = y;

var component = <Component {...props} />;

传入对象的属性会被复制到组件内。

它能被多次使用，也可以和其它属性一起用。注意顺序很重要，后面的会覆盖掉前面的。


var props = { foo: 'default' };

var component = <Component {...props} foo={'override'} />;

console.log(component.props.foo); // 'override'


## ...

... 操作符 (增强的操作符) 已经被 ES6 数组支持


Object 剩余和展开属性 (Rest and Spread Properties)

https://github.com/sebmarkbage/ecmascript-rest-spread



*******************************************************************************
http://react2.xgqfrms.xyz/docs/reusable-components.html

自动绑定（Autobinding）

在 React 中，所有方法被自动绑定到了它的组件实例上（除非使用ES6的class符号）

http://react2.xgqfrms.xyz/docs/reusable-components.html#no-autobinding

可复用组件

## React.PropTypes  

Prop 验证
随着应用不断变大，保证组件被正确使用变得非常有用。
为此我们引入 propTypes。
React.PropTypes 提供很多验证器 (validator) 来验证传入数据的有效性。
当向 props 传入无效数据时，JavaScript 控制台会抛出警告。
注意为了性能考虑，只在开发环境验证 propTypes。




more coming soon ...













*******************************************************************************
http://react2.xgqfrms.xyz/docs/forms.html

表单组件


## 受控组件

一个受控的 <input> 有一个 value prop。
渲染一个受控 <input> 会反映 value prop 的值。

render: function() {
    return <input type="text" value="Hello!" />;
}


## 不受控组件

一个没有 value 属性的 <input> 是一个不受控组件:

  render: function() {
    return <input type="text" />;
}

## 默认值

如果想给组件设置一个非空的初始值，可以使用 defaultValue 属性。
例如：

render: function() {
    return <input type="text" defaultValue="Hello!" />;
}

这个例子会像上面的 受控组件 例子一样运行。
同样的， <input type="checkbox"> 和 <input type="radio"> 支持 defaultChecked 、 <select> 支持 defaultValue.

注意:
defaultValue 和 defaultChecked props 只能在内部渲染时被使用。 如果你需要在随后的渲染更新值, 你需要使用 受控组件.





more coming soon ...




*******************************************************************************
http://react2.xgqfrms.xyz/docs/transferring-props.html

http://react2.xgqfrms.xyz/docs/jsx-spread.html

# 传递 Props

React 里有一个非常常用的模式就是对组件做一层抽象。
组件对外公开一个简单的属性（Props）来实现功能，但内部的实现可能非常复杂。

可以使用 **JSX 展开属性** 来合并现有的 props 和其它值：

<Component {...this.props} more="values" />

如果不使用 JSX，可以使用一些对象辅助方法如 ES6 的 Object.assign 或 Underscore _.extend。

React.createElement(
    Component, 
    Object.assign(
        {},
        this.props,
        { more: 'values' }
    )
);

最佳实践 : 使用了 JSX 和 试验性的ECMAScript 语法。




解构赋值 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

剩余属性和展开属性 ...

https://github.com/sebmarkbage/ecmascript-rest-spread

剩余属性可以把对象剩下的属性提取到一个新的对象。
这会把所有在解构赋值中列出的属性剔除。

```js

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

??? run bugs ???

// Babel 6转换 rest 和 spread 属性

x; // 1
y; // 2
z; // { a: 3, b: 4 }

``` 





*******************************************************************************




*******************************************************************************


*******************************************************************************



*******************************************************************************







*******************************************************************************






*******************************************************************************




