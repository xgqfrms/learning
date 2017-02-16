# codecademy



https://www.codecademy.com/learn/react-102


COURSE OUTCOMES

课程成果

This course will teach you the remaining most essential tools that any React.js programmer is expected to know, including lifecycle methods, proptypes, basic styling, stateless functional components, and more.

本课程将向您介绍任何React.js程序员应该知道的其他最基本的工具，包括生命周期方法，proptype，基本样式，无状态功能组件等等。


ou will also be introduced to your first React.js programming patterns, and learn to setup React on your local computer.

您还将介绍您的第一个React.js编程模式，并学习在本地计算机上设置React。

WHY LEARN REACTJS?

为什么要学习反应？


ReactJS presents graceful solutions to some of front-end programming's most persistent issues. It's fast, scalable, flexible, powerful, and has a robust developer community that's rapidly growing. There's never been a better time to learn React.

ReactJS为一些前端程序的最持久的问题提供了优雅的解决方案。它的快速，可扩展，灵活，强大，并有一个强大的开发人员社区快速增长。从来没有一个更好的时间来学习React。




Syllabus

教学大纲

Stateless Components Inherit From Stateful Components

无状态组件从有状态组件继承










## 1 Stateless Components Inherit From Stateful Components

Stateless Components Inherit From Stateful Components

Child Components Update Their Parents' state

Child Components Update Their Siblings' props



## 2 Advanced React

Style
Container Components From Presentational Components
Stateless Functional Components
PropTypes
React Forms



## 3 Lifecycle Methods

Mounting Lifecycle Methods
Updating/Unmounting Lifecycle Methods







3
Lifecycle Methods
Mounting Lifecycle Methods

Updating/Unmounting Lifecycle Methods













## Container Components From Presentational Components

来自演示组件的容器组件


https://www.codecademy.com/courses/react-102/lessons/container-presentational-components/exercises/container-presentational-components-apply?action=lesson_resume#













# react-app



https://facebook.github.io/react/docs/installation.html

$ npm install -g create-react-app

$ create-react-app codecademy

> cd codecademy

$ npm start








# react-app



https://facebook.github.io/react/docs/installation.html

$ npm install -g create-react-app

$ create-react-app codecademy

> cd codecademy

$ npm start




webpack, Babel , ESLint 



Create React App doesn't handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. It uses webpack, Babel and ESLint under the hood, but configures them for you.

创建React应用程序不处理后端逻辑或数据库;它只是创建一个前端构建管道，所以你可以使用它与任何后端你想要的。它使用webpack，Babel和ESLint在引擎盖下，但配置他们为你。






https://facebook.github.io/react/docs/installation.html




To install React with Yarn, run:

$ yarn init
$ yarn add react react-dom


To install React with npm, run:

$ npm init
$ npm install --save react react-dom




Enabling ES6 and JSX

We recommend using React with Babel to let you use ES6 and JSX in your JavaScript code. ES6 is a set of modern JavaScript features that make development easier, and JSX is an extension to the JavaScript language that works nicely with React.

The Babel setup instructions explain how to configure Babel in many different build environments. Make sure you install babel-preset-react and babel-preset-es2015 and enable them in your .babelrc configuration, and you're good to go.


.babelrc

$ npm install babel-preset-react babel-preset-es2015 -D



import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
);







Development and Production Versions

By default, React includes many helpful warnings. These warnings are very useful in development. However, they make React larger and slower so you should make sure to use the production version when you deploy the app.

Create React App
If you use Create React App, npm run build will create an optimized build of your app in the build folder.

$ npm run build


Webpack
Include both DefinePlugin and UglifyJsPlugin into your production Webpack configuration as described in this guide.

DefinePlugin, UglifyJsPlugin

https://webpack.js.org/guides/production-build/



Browserify
Run Browserify with NODE_ENV environment variable set to production and use UglifyJS as the last build step so that development-only code gets stripped out.

NODE_ENV, production

UglifyJS
https://github.com/mishoo/UglifyJS


Using a CDN

<script src="https://unpkg.com/react@15/dist/react.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>


<script src="https://unpkg.com/react@15/dist/react.min.js"></script>
<script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>






