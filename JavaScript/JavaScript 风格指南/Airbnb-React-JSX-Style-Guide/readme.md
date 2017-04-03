# Airbnb React/JSX Style Guide


https://gist.github.com/xgqfrms-GitHub/b95f1824f2ea5a2e28b09dff6fd191bc



# Airbnb React/JSX Style Guide

https://github.com/airbnb/javascript

https://github.com/airbnb/javascript/tree/master/react

React和JSX最合理的方法

## Table of Contents

  1. [Basic Rules](#basic-rules)
  1. [Class vs `React.createClass` vs stateless](#class-vs-reactcreateclass-vs-stateless)
  1. [Mixins](#mixins)
  1. [Naming](#naming)
  1. [Declaration](#declaration)
  1. [Alignment](#alignment)
  1. [Quotes](#quotes)
  1. [Spacing](#spacing)
  1. [Props](#props)
  1. [Refs](#refs)
  1. [Parentheses](#parentheses)
  1. [Tags](#tags)
  1. [Methods](#methods)
  1. [Ordering](#ordering)
  1. [`isMounted`](#ismounted)



# Style Guide



https://github.com/airbnb/javascript  
https://github.com/airbnb/javascript/tree/master/react  
https://github.com/airbnb/javascript/tree/master/css-in-javascript  
https://github.com/airbnb/css  


https://facebook.github.io/react/docs/react-api.html  
https://facebook.github.io/react/docs/react-api.html#react.purecomponent  
https://facebook.github.io/react/docs/react-api.html#react.component  
https://facebook.github.io/react/docs/react-component.html  


https://github.com/facebook/react/issues/8870  

text/babel

react-cli

https://github.com/facebookincubator/create-react-app  
https://github.com/facebookincubator/create-react-app#getting-started  





https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#importing-a-component  

import React, { Component } from 'react';

https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-bootstrap  
https://react-bootstrap.github.io/  


https://github.com/JasonBoy/javascript/tree/master/react  
https://github.com/huliyou/maoni/issues/2  
https://gist.github.com/xgqfrms-GitHub/b95f1824f2ea5a2e28b09dff6fd191bc  



## Airbnb React/JSX Style Guide



## 基本规则

每个文件只包含一个React组件。
    但是，每个文件允许多个无状态或纯组件。 
    eslint: react/no-multi-comp.

始终使用JSX语法。

除非你正在从非JSX的文件初始化应用程序，否则不要使用React.createElement。


https://facebook.github.io/react/docs/components-and-props.html

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md#ignorestateless


## Class vs React.createClass vs stateless

如果你有内部状态和/或refs，优先考虑 class extends React.Component 胜过 React.createClass 
eslint: react/prefer-es6-class react/prefer-stateless-function

```jsx

// good
class Listing extends React.Component {
    // ...
    render() {
        return <div>{this.state.hello}</div>;
    }
}

import React, { Component } from 'react';

class Listing extends Component {
    // ...
    render() {
        return <div>{this.state.hello}</div>;
    }
}

``` 



https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md


如果你没有状态或refs，优先考虑 正常函数（不是ES6 箭头函数）胜过 Class：

不鼓励依赖函数名推理/推论



```jsx

// bad (ES6 依赖函数名推理/推论, 不鼓励)
const Listing = ({ hello }) => (
    <div>{hello}</div>
);

// good
function Listing({ hello }) {
    return <div>{hello}</div>;
}

``` 



## Mixins


不要使用 mixins。

为什么？混合引入隐式依赖，导致名称冲突，并导致滚雪球般的复杂性。

mixins的大多数用例， 都可以通过组件，高阶组件或实用程序模块以更好的方式实现。


https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html


## Naming


扩展名：对React组件使用.jsx扩展名。

文件名：使用PascalCase作为文件名。例如，ReservationCard.jsx。

参考命名：对于React组件使用PascalCase，为其实例使用camelCase。


https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md

```jsx


// good
import ReservationCard from './ReservationCard';

// good
const reservationItem = <ReservationCard />;

``` 

组件命名：使用文件名作为组件名称。

例如，ReservationCard.jsx应具有参考名称ReservationCard。
但是，对于目录的根组件，请使用index.jsx作为文件名，并使用目录名作为组件名称：


```jsx

// good
import Footer from './Footer';

``` 


高阶组件命名：使用高阶组件名称和传入的组件名称的组合作为生成组件上的displayName。
例如，高阶组件 withFoo(), 在传递组件 Bar时应该生成一个具有 withFoo(Bar)的 displayName的组件。

为什么？组件的displayName可以由开发人员工具或错误消息使用，并且具有清楚表达此关系的值可帮助人们理解发生了什么。


```jsx

 // bad
export default function withFoo(WrappedComponent) {
    return function WithFoo(props) {
        return <WrappedComponent {...props} foo />;
    }
}

// good
export default function withFoo(WrappedComponent) {
    function WithFoo(props) {
        return <WrappedComponent {...props} foo />;
    }

    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    WithFoo.displayName = `withFoo(${wrappedComponentName})`;
    return WithFoo;
}

# displayName ???

``` 


Props命名：避免使用DOM组件prop名称用于不同的目的。


为什么？人们期望Props像style和className意味着一个特定的东西。
为应用程序的一个子集更改此API会使代码的可读性和可维护性降低，并可能导致错误。

```jsx

// bad
<MyComponent style="fancy" />

// good
<MyComponent variant="fancy" />

``` 


## Declaration

不要使用displayName命名组件。而是，通过引用命名组件。

```jsx

// bad
export default React.createClass({
    displayName: 'ReservationCard',
    // 
});

// good
export default class ReservationCard extends React.Component {
    // 
}

``` 

## Alignment

遵循这些对齐样式的JSX语法。eslint: react/jsx-closing-bracket-location


https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md


```jsx

// good
<Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
/>

// 如果props适合在一行，然后保持在同一行
<Foo bar="bar" />

// children 正常缩进
<Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
>
    <Quux />
</Foo>

``` 






## Quotes


对JSX属性始终使用双引号 (")，对所有其他JS使用单引号(')。eslint: jsx-quotes

http://eslint.org/docs/rules/jsx-quotes


为什么？常规HTML属性通常使用双引号而不是单引号，因此JSX属性反映了此约定。




```jsx

// good
<Foo bar="bar" />

// good
<Foo style={{ left: '20px' }} />

``` 




## Spacing

始终在自我关闭代码中包含一个空格。
eslint: no-multi-spaces, react/jsx-space-before-closing

http://eslint.org/docs/rules/no-multi-spaces

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md


```jsx

// good
<Foo />

``` 

不要用空格填充JSX花括号。eslint: react/jsx-curly-spacing

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md


```jsx

// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />

``` 


## Props

始终使用camelCase作为Props名称。


```jsx

// good
<Foo
    userName="hello"
    phoneNumber={12345678}
/>

``` 

当它明确的为true时，省略prop的值。eslint: react/jsx-boolean-value

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md


```jsx

// bad
<Foo
    hidden={true}
/>

// good
<Foo
    hidden
/>

``` 

始终在 &lt;img&gt; 标签上添加 alt属性。
如果图像是演示/呈现的，alt可以是空字符串,或 &lt;img&gt; 必须具有role =“presentation”。
eslint: jsx-a11y/img-has-alt

https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-has-alt.md


```jsx

// good
<img src="hello.jpg" alt="Me waving hello" />

// good
<img src="hello.jpg" alt="" />

// good
<img src="hello.jpg" role="presentation" />


``` 

请勿在 &lt;img&gt; alt props中使用诸如 "image", "photo", 或 "picture"之类的字词。
eslint: jsx-a11y/img-redundant-alt

https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md

为什么？屏幕阅读器已经公布img元素作为图像，所以没有必要在alt文本中包含这些信息。

```jsx

// bad
<img src="hello.jpg" alt="Picture of me waving hello" />

// good
<img src="hello.jpg" alt="Me waving hello" />

``` 

仅使用有效的，非抽象的ARIA角色。 eslint: jsx-a11y/aria-role

https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md


```jsx

// bad - not an ARIA role
<div role="datepicker" />

// bad - abstract ARIA role
<div role="range" />

// good
<div role="button" />

``` 

不要对元素使用accessKey。eslint: jsx-a11y/no-access-key

https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md


为什么？键盘快捷键和使用屏幕阅读器和键盘的人使用的键盘命令之间的不一致使得可访问性变得复杂。

```jsx

// bad
<div accessKey="h" />

// good
<div />

``` 

避免使用数组索引作为 key属性，优先考虑一个唯一/独一无二的ID。

https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318




```jsx

// bad
{todos.map((todo, index) =>
    <Todo
        {...todo}
        key={index}
    />
)}

// good
{todos.map(todo => (
    <Todo
        {...todo}
        key={todo.id}
    />
))}

``` 

始终为所有非必需props, 定义明确的defaultProps。

为什么？ propTypes是一种形式的文档，并且提供defaultProps意味着你的代码的读者不必假设尽可能多。此外，这可能意味着您的代码可以省略某些类型检查。

https://github.com/airbnb/javascript/issues/1337



```jsx

// bad
function SFC({ foo, bar, children }) {
    return <div>{foo}{bar}{children}</div>;
}
SFC.propTypes = {
    foo: PropTypes.number.isRequired,
    bar: PropTypes.string,
    children: PropTypes.node,
};



// good
function SFC({ foo, bar, children }) {
    return <div>{foo}{bar}{children}</div>;
}
SFC.propTypes = {
    foo: PropTypes.number.isRequired,
    bar: PropTypes.string,
    children: PropTypes.node,
};
SFC.defaultProps = {
    bar: '',
    children: null,
};

``` 


## Refs

始终使用回调参考。 eslint: react/no-string-refs

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md



```jsx

// bad
<Foo
    ref="myRef"
/>

// good
<Foo
    ref={(ref) => {this.myRef = ref;}}
/>

``` 



## Parentheses

当JSX标记跨越多行时，将其包裹在括号中。eslint: react/jsx-wrap-multilines

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md


```jsx


// good
render() {
    return (
        <MyComponent className="long body" foo="bar">
            <MyChild />
        </MyComponent>
    );
}

// good, 当单行时
render() {
    const body = <div>hello</div>;
    return <MyComponent>{body}</MyComponent>;
}

``` 

##  Tags

始终自我关闭没有孩子的标签。eslint: react/self-closing-comp

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md


```jsx

// bad
<Foo className="stuff"></Foo>

// good
<Foo className="stuff" />

``` 

如果组件具有多行属性，请在新行上关闭其标记。eslint: react/jsx-closing-bracket-location

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md


```jsx

// bad
<Foo
    bar="bar"
    baz="baz" />

// good
<Foo
    bar="bar"
    baz="baz"
/>

``` 




## Methods

使用箭头函数关闭局部变量。

```jsx

function ItemList(props) {
    return (
        <ul>
            {props.items.map((item, index) => (
                <Item
                    key={item.key}
                    onClick={() => doSomethingWith(item.name, index)}
                />
            ))}
        </ul>
    );
}

``` 

在构造函数中为render方法绑定事件处理程序。 eslint: react/jsx-no-bind

https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md

为什么？渲染路径中的 bind 调用为每个渲染创建一个全新的函数。


```jsx

// bad
class extends React.Component {
    onClickDiv() {
        //
    }
    render() {
        return <div onClick={this.onClickDiv.bind(this)} />
    }
}

// good
class extends React.Component {
    constructor(props) {
        super(props);
        this.onClickDiv = this.onClickDiv.bind(this);
    }
    onClickDiv() {
        //
    }
    render() {
        return <div onClick={this.onClickDiv} />
    }
}

``` 



不要对React组件的内部方法使用下划线前缀。
为什么？下划线前缀有时用作其他语言的惯例来表示私有的。但是，与那些语言不同，JavaScript中没有原生支持私有，一切都是公开的。无论你的意图如何，为你的属性添加下划线前缀实际上并不会使它们设置为私有，任何属性（下划线前缀或不带前缀）都应被视为公开。
请参阅问题＃1024和＃490以进行更深入的讨论。

https://github.com/airbnb/javascript/issues/1024

他们给人们一种“私人”的错误感觉，可能导致错误。



https://github.com/airbnb/javascript/issues/490


```jsx

// bad
React.createClass({
    _onClickSubmit() {
        // do stuff
    },
    // other stuff
});

// good
class extends React.Component {
    onClickSubmit() {
        // do stuff
    }
    // other stuff
}

``` 



请务必在渲染方法中返回一个值。eslint: react/require-render-return


https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md


```jsx

// bad
render() {
    (<div />);
}

// good
render() {
    return (<div />);
}

``` 





## Ordering

排序 class extends React.Component: 

01. 可选 static 方法
02. `constructor`
03. `getChildContext`
04. `componentWillMount`
05. `componentDidMount`
06. `componentWillReceiveProps`
07. `shouldComponentUpdate`
08. `componentWillUpdate`
09. `componentDidUpdate`
10. `componentWillUnmount`
11. 点击处理器 或 事件处理器, 如 `onClickSubmit()` 或 `onChangeDescription()`
12. 用于 `render` 的 getter方法, 如 `getSelectReason()` 或 `getFooterContent()`
13. 可选的渲染方法，如 `renderNavigation()` 或 `renderProfilePicture()`
14. `render`


如何定义 propTypes, defaultProps, contextTypes, 等等...



```jsx

import React, { PropTypes } from 'react';

const propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string,
};

const defaultProps = {
    text: 'Hello World',
};

class Link extends React.Component {
    static methodsAreOk() {
        return true;
    }
    render() {
        return(
            <a href={this.props.url} data-id={this.props.id}>
                {this.props.text}
            </a>
        );
    }
}

Link.propTypes = propTypes;

Link.defaultProps = defaultProps;

export default Link;

``` 


排序 React.createClass: eslint: react/sort-comp


https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md



01. `displayName`
02. `propTypes`
03. `contextTypes`
04. `childContextTypes`
05. `mixins`
06. `statics`

07. `defaultProps`
08. `getDefaultProps`
09. `getInitialState`

10. `getChildContext`
11. `componentWillMount`
12.  `componentDidMount`
13. `componentWillReceiveProps`

14. `shouldComponentUpdate`
15. `componentWillUpdate`
16. `componentDidUpdate`
17. `componentWillUnmount`

18. 点击处理器 或 事件处理器, 如 `onClickSubmit()` 或 `onChangeDescription()`
19. 用于 `render` 的 getter方法, 如 `getSelectReason()` 或 `getFooterContent()`
20. 可选的渲染方法，如 `renderNavigation()` 或 `renderProfilePicture()`
21. `render`



## isMounted


不要使用isMounted。 eslint: react/no-is-mounted

为什么？ isMounted是一个反模式，在使用ES6类时不可用，并且正在被正式弃用。

https://facebook.github.io/react/blog/2015/12/16/ismounted-antipattern.html




## 此 JSX / React风格指南也提供其他语言版本：


https://github.com/airbnb/javascript/tree/master/react#methods


https://github.com/airbnb/javascript/tree/master/react#table-of-contents






















