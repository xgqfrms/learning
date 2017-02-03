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



*******************************************************************************






*******************************************************************************












*******************************************************************************












*******************************************************************************













*******************************************************************************





























