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









*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************
*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************

*******************************************************************************










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

随着应用不断变大，保证组件被正确使用变得非常有用, 为此我们引入 propTypes。
React.PropTypes 提供很多验证器 (validator) 来验证传入数据的有效性。
当向 props 传入无效数据时，JavaScript 控制台会抛出警告。

注意:
为了性能考虑，只在开发环境验证 propTypes。

不同验证器的区别：


React.createClass({
  propTypes: {
    // 可以声明 prop 为指定的 JS 基本类型
    // (Number,Boolean,String,Symbol,Undefined,Null, Object[object,array,func] )。
    // 默认情况下，这些 prop 都是可传可不传的。
    optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,
    optionalSymbol: React.PropTypes.symbol,

    // 所有可以被渲染的对象：数字，
    // 字符串，DOM 元素或包含这些类型的数组(or fragment) 。
    optionalNode: React.PropTypes.node,

    // React 元素
    optionalElement: React.PropTypes.element,

    // 你同样可以断言一个 prop 是一个类的实例。
    // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
    optionalMessage: React.PropTypes.instanceOf(Message),

    // 你可以用 enum 的方式
    // 确保你的 prop 被限定为指定值。
    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

    // 指定的多个对象类型中的一个
    optionalUnion: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.instanceOf(Message)
    ]),

    // 指定类型组成的数组
    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

    // 指定类型的属性构成的对象
    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

    // 特定形状参数的对象
    optionalObjectWithShape: React.PropTypes.shape({
      color: React.PropTypes.string,
      fontSize: React.PropTypes.number
    }),

    // 你可以在任意东西后面加上 `isRequired`
    // 来确保 如果 prop 没有提供 就会显示一个警告。
    requiredFunc: React.PropTypes.func.isRequired,

    // 不可空的任意类型
    requiredAny: React.PropTypes.any.isRequired,

    // 你可以自定义一个验证器。如果验证失败需要返回一个 Error 对象。
    // 不要直接使用 `console.warn` 或抛异常，
    // 因为这在 `oneOfType` 里不起作用。
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error('Validation failed!');
      }
    }
  },
  /* ... */
});


## Single Child 

用 React.PropTypes.element 你可以指定仅有一个子级能被传送给组件

var MyComponent = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render: function() {
    return (
      <div>
        {this.props.children} // 这里必须是一个元素否则就会警告
      </div>
    );
  }

});



## 默认 Prop 值

React 支持以声明式的方式来定义 props 的默认值。

var ComponentWithDefaultProps = React.createClass({
  getDefaultProps: function() {
    return {
      value: 'default value'
    };
  }
  /* ... */
});

当父级没有传入 props 时，getDefaultProps() 可以保证 this.props.value 有默认值，注意 getDefaultProps 的结果会被缓存。
得益于此，你可以直接使用 props，而不必写手动编写一些重复或无意义的代码。


## 传递 Props：捷径(shorthand )

有一些常用的 React 组件只是对 HTML 做简单扩展。
通常，你想复制任何传进你的组件的HTML属性到底层的HTML元素上。
为了减少输入，你可以用 JSX spread 语法来完成：

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


## Mixins  

组件是 React 里复用代码的最佳方式，但是有时一些不同的组件间也需要共用一些功能。
有时会被称为 跨切面关注点。
https://en.wikipedia.org/wiki/Cross-cutting_concern
React 使用 mixins 来解决这类问题。

一个通用的场景是：
一个组件需要定期更新。
用 setInterval() 做很容易，但当不需要它的时候取消定时器来节省内存是非常重要的。
React 提供 生命周期方法 来告知你组件创建或销毁的时间。

http://react2.xgqfrms.xyz/docs/working-with-the-browser.html#component-lifecycle

下面来做一个简单的 mixin，使用 setInterval() 并保证在组件销毁时清理定时器。


关于 mixin 值得一提的优点：
如果一个组件使用了多个 mixin，并用有多个 mixin 定义了同样的生命周期方法（如：多个 mixin 都需要在组件销毁时做资源清理操作），所有这些生命周期方法都保证会被执行到。

方法执行顺序是：
首先按 mixin 引入顺序执行 mixin 里方法，最后执行组件内定义的方法。


## ES6 Classes

你也可以以一个简单的 JavaScript 类来定义你的React classes。

class HelloMessage extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

ReactDOM.render(
    <HelloMessage name="Sebastian" />,
    mountNode
);

API近似于 React.createClass 除了 getInitialState。 你应该在构造函数里设置你的state，而不是提供一个单独的 getInitialState 方法。
就像 getInitialState 的返回值，你赋给 this.state 的值会被作为组件的初始 state。

另一个不同是 propTypes 和 defaultProps 是在构造函数里被定义为属性，而不是在 class body 里。

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

## 无自动绑定  

ES6 Classes (export class Counter extends React.Component ) 方法,
遵循正式的ES6 class的语义，意味着它们不会自动绑定this到实例上。
你必须显示的使用.bind(this) or 箭头函数 =>：

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// 你可以使用 bind() 来绑定 `this`
<div onClick={this.tick.bind(this)}>

// 或者你可以使用箭头函数
<div onClick={() => this.tick()}>

我们建议你在构造函数中绑定事件处理器，这样对于所有实例它们只需绑定一次：

constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this.tick = this.tick.bind(this);
}
现在你可以直接使用 this.tick 因为它已经在构造函数里绑定过一次了。

// 它已经在构造函数里绑定过了
<div onClick={this.tick}>

这对应用的性能有帮助，特别是当你用 **浅层比较** 实现 shouldComponentUpdate() 时。

http://react2.xgqfrms.xyz/docs/shallow-compare.html  
http://react2.xgqfrms.xyz/docs/component-specs.html#updating-shouldcomponentupdate  

### 没有 Mixins  

不幸的是ES6的发布没有任何mixin的支持。
因此，当你在ES6 classes下使用React时不支持mixins。
作为替代，我们正在努力使它更容易不依靠mixins支持这些用例。



## 无状态函数

你也可以用 JavaScript 函数来定义你的 React 类。例如使用无状态函数语法：

function HelloMessage(props) {
    return <div>Hello {props.name}</div>;
}
ReactDOM.render(
    <HelloMessage name="Sebastian" />,
    mountNode
);

或者,使用新的ES6箭头函数:

<!-- 
const HelloMessage = (props) => {
    <div>Hello {props.name}</div>;
}

const HelloMessage = (props) => {
    (<div>Hello {props.name}</div>);
}

 -->

const HelloMessage = (props) => <div>Hello {props.name}</div>;

ReactDOM.render(
    <HelloMessage name="Sebastian" />,
    mountNode
);

这个简化的组件API旨在用于那些纯函数态(pure function)的组件 。
这些组件必须没有保持任何内部状态，没有备份实例，也没有组件生命周期方法。
他们纯粹的函数式的转化他们的输入，没有引用。
然而，你仍然可以以设置函数 properties 的方式来指定 .propTypes 和 .defaultProps，就像你在ES6类里设置他们那样。

注意：
因为无状态函数没有备份实例，你不能附加一个引用到一个无状态函数组件。
通常这不是问题，因为无状态函数不提供一个命令式的API。
没有命令式的API，你就没有任何需要实例来做的事。
然而，如果用户想查找无状态函数组件的DOM节点，他们必须把这个组件包装在一个有状态组件里（比如，ES6 类组件） 并且连接一个引用到有状态的包装组件。

在理想世界里，你的大多数组件都应该是无状态函数(stateless function)，因为将来我们可能会用避免不必要的检查和内存分配的方式来对这些组件进行优化。 如果可能，这是推荐的模式。




*******************************************************************************
http://react2.xgqfrms.xyz/docs/forms.html

# 表单组件

## 表单组件

诸如 <input>、<textarea>、<option> 这样的表单组件不同于其他原生组件，因为他们可以通过用户交互发生变化。
这些组件提供的界面使响应用户交互的表单数据处理更加容易。

关于 <form> 事件详情请查看 表单事件。

http://react2.xgqfrms.xyz/docs/events-zh-CN.html#%E8%A1%A8%E5%8D%95%E4%BA%8B%E4%BB%B6

## 交互属性

表单组件支持几个受用户交互影响的属性：

value，用于 <input>、<textarea> 组件。
checked，用于类型为 checkbox 或者 radio 的 <input> 组件。
selected，用于 <option> 组件。

在 HTML 中，<textarea> 的值通过子节点设置；在 React 中则应该使用 value 代替。

表单组件可以通过 onChange 回调函数来监听组件变化。
当用户做出以下交互时，onChange 执行并通过浏览器做出响应：

<input> 或 <textarea> 的 value 发生变化时。
<input> 的 checked 状态改变时。
<option> 的 selected 状态改变时。

和所有 DOM 事件一样，所有的 HTML 原生组件都支持 onChange 属性，而且可以用来监听冒泡的 change 事件。

注意:
对于 <input> and <textarea>， onChange 取代 — 一般应该用来替代 — DOM内建的 oninput 事件处理。


## 受控组件

一个受控的 <input> 有一个 value prop。
渲染一个受控 <input> 会反映 value prop 的值。

render: function() {
    return <input type="text" value="Hello!" />;
}

用户输入在被渲染的元素里将没有作用,因为 React 已经声明值为 Hello!。
要更新 value 来响应用户输入，你可以使用 onChange 事件：

getInitialState: function() {
    return {value: 'Hello!'};
},
handleChange: function(event) {
    this.setState({value: event.target.value});
},
render: function() {
    return (
        <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
        />
    );
}

在这个例子中，我们接受用户提供的值并更新 <input> 组件的 value prop。
这个模式使实现响应或者验证用户输入的界面更容易。例如：

handleChange: function(event) {
    this.setState({value: event.target.value.substr(0, 140)});
}

上面的代码接受用户输入，并截取前 140 个字符。

受控组件不维持一个自己的内部状态;它单纯的基于 props 渲染。

## 复选框与单选按钮的潜在问题

当心，在力图标准化复选框与单选按钮的变换处理中，React使用 click 事件代替 change 事件。
在大多数情况下它们表现的如同预期，除了在change handler中调用preventDefault 。
preventDefault 阻止了浏览器视觉上更新输入，即使checked被触发。
变通的方式是要么移除preventDefault的调用，要么把checked 的触发放在一个setTimeout里。


## 不受控组件

一个没有 value 属性的 <input> 是一个不受控组件:

render: function() {
    return <input type="text" />;
}


上面的代码将渲染出一个空值的输入框，用户输入将立即反应到元素上。
和受控元素一样，使用 onChange 事件可以监听值的变化。

不受控组件维持它自己的内部状态。

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


http://react2.xgqfrms.xyz/docs/forms.html#%E5%8F%97%E6%8E%A7%E7%BB%84%E4%BB%B6



# 高级主题

## 为什么使用受控组件？

在 React 中使用诸如 <input> 的表单组件时，遇到了一个在传统 HTML 中没有的挑战。
比如下面的代码：

<input type="text" name="title" value="Untitled" />

它渲染一个初始值为 Untitled 的输入框。
当用户改变输入框的值时，节点的 value 属性( property)将随之变化，但是 node.getAttribute('value') 还是会返回初始设置的值 Untitled.

与 HTML 不同，React 组件必须在任何时间点都表现视图的状态，而不仅仅是在初始化时。
比如在 React 中：

render: function() {
    return <input type="text" name="title" value="Untitled" />;
}

由于这个方法描述了在任意时间点上的视图，那么文本输入框的值就应该始终为 Untitled。


## 为什么 <textarea> 使用 value 属性？

在 HTML 中， <textarea> 的值通常使用子节点设置：

<!-- 反例：在 React 中不要这样使用！ -->
<textarea name="description">This is the description.</textarea>

对 HTML 而言，让开发者设置多行的值很容易。
但是，由于 React 是 JavaScript，没有字符串限制，可以使用 \n 实现换行。
简言之，React 已经有 value、defaultValue 属性，<textarea> 组件的子节点扮演什么角色就有点模棱两可了。
基于此， 设置 <textarea> 值时不应该使用子节点：

<textarea name="description" value="This is a description." />

如果 非要 使用子节点，效果和使用 defaultValue 一样。


## 为什么 <select> 使用 value 属性

HTML 中 <select> 通常使用 <option> 的 selected 属性设置选中状态；
React 为了更方便地控制组件，采用以下方式代替：

<select value="B">
    <option value="A">Apple</option>
    <option value="B">Banana</option>
    <option value="C">Cranberry</option>
</select>

如果是不受控组件，则使用 defaultValue。

注意：
给 value 属性传递一个数组，可以选中多个选项：

<select multiple={true} value={['B', 'C']}>





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

## 手动传递 props

大部分情况下你应该显式地向下传递 props。这样可以确保只公开你认为是安全的内部 API 的子集。


## 在 JSX 里使用 ... (Rest and Spread Properties ...) 传递 props


http://react2.xgqfrms.xyz/docs/transferring-props.html#%E5%89%A9%E4%BD%99%E5%B1%9E%E6%80%A7%E5%92%8C%E5%B1%95%E5%BC%80%E5%B1%9E%E6%80%A7-...

// --harmony 标志是必须的因为这个语法是ES7的实验性语法。

<script type="text/jsx; harmony=true">

有时把所有属性都传下去是不安全或啰嗦的。
这时可以使用 解构赋值 中的剩余属性特性来把未知属性批量提取出来。

列出所有当前要使用的属性，后面跟着 ...other。

var { checked, ...other } = props;

这样能确保把所有 props 传下去，除了 那些已经被使用了的。

在传递这些未知的 other 属性时，要经常使用解构赋值模式。


## 使用和传递同一个 Prop  

如果组件需要使用一个属性又要往下传递，可以直接使用 checked={checked} 再传一次。
这样做比传整个 props 对象要好，因为更利于重构和语法检查。

注意:
顺序很重要，把 {...other} 放到 JSX props 前面会使 props 不会被覆盖。上面例子中我们可以保证 input 的 type 是 "checkbox"。



##  剩余属性和展开属性 ...  



解构赋值 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

剩余属性和展开属性 ...

https://github.com/sebmarkbage/ecmascript-rest-spread

剩余属性可以把对象剩下的属性提取到一个新的对象。
这会把所有在解构赋值中列出的属性剔除。

```js

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

??? run bugs ???

注意:

要用 Babel 6转换 rest 和 spread 属性，
你需要安装 es2015 preset，transform-object-rest-spread 插件,
并在 .babelrc 里配置他们.

x; // 1
y; // 2
z; // { a: 3, b: 4 }

``` 

## 使用 Underscore 来传递 props

如果不使用 JSX，可以使用一些库来实现相同效果。

Underscore 提供 _.omit 来过滤属性，_.extend 复制属性到新的对象。

function FancyCheckbox(props) {
    var checked = props.checked;
    var other = _.omit(props, 'checked');
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    return (
        React.DOM.div(
            _.extend(
                {},
                other,
                { className: fancyClass }
            )
        )
    );
}




*******************************************************************************




*******************************************************************************


*******************************************************************************



*******************************************************************************







*******************************************************************************






*******************************************************************************




