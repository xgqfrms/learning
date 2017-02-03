# React  

https://www.packtpub.com/mapt/history 


F:\Books\React-all-in-one  



## error (browser.min.js )

https://github.com/xgqfrms007/test/issues/1

## OK (babel-standalone)  



error:  

<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.min.js" integrity="sha256-zSpX/F9KKuk1nLBq2vygsdDm6QrSbVdn5lteMkdzWdk=" crossorigin="anonymous"></script> 

OK:  

https://unpkg.com/babel-standalone@6.15.0/babel.min.js  
https://cdnjs.com/libraries/babel-standalone  

<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.0/babel.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.0/babel.min.js" integrity="sha256-YXgKpPGTUUui8cJMq3LCqmBR7jMJCbjLjlhpqhFU3E0=" crossorigin="anonymous"></script>



## HTML 标签对比 React 组件

http://react2.xgqfrms.xyz/docs/jsx-in-depth.html



React 可以渲染 HTML 标签 (strings) 或 React 组件 (classes)。

要渲染 HTML 标签，只需在 JSX 里使用小写字母的标签名。

var myDivElement = <div className="foo" />;

ReactDOM.render(myDivElement, document.getElementById('example'));


要渲染 React 组件，只需创建一个大写字母开头的本地变量。

var MyComponent = React.createClass({/*...*/});

var myElement = <MyComponent someProperty={true} />;

ReactDOM.render(myElement, document.getElementById('example'));

React 的 JSX 使用大、小写的约定来区分本地组件的类和 HTML 标签。




## 转换（Transform）



XML 元素、属性和子节点被转换成 React.createElement 的参数



*******************************************************************************

# hash symbol hover  


<h2>
    <a class="anchor" name="转换transform"></a>
    转换（Transform） 
    <a class="hash-link" href="http://react2.xgqfrms.xyz/docs/jsx-in-depth.html#转换transform">#</a>
</h2>

h1:hover .hash-link, h2:hover .hash-link, h3:hover .hash-link, h4:hover .hash-link, h5:hover .hash-link, h6:hover .hash-link {
    display: inline;
}

.hash-link {
    color: #aaa;
    display: none;
}



*******************************************************************************


##  命名组件（Namespaced Components） 


命名组件, 令你使用包含其他组件作为属性的单一的组件。

var Form = MyFormComponent;

var App = (
  <Form>
    <Form.Row>
      <Form.Label />
      <Form.Input />
    </Form.Row>
  </Form>
);



要做到这一点，你只需要把你的"子组件"创建为主组件的属性。

var MyFormComponent = React.createClass({ ... });

MyFormComponent.Row = React.createClass({ ... });
MyFormComponent.Label = React.createClass({ ... });
MyFormComponent.Input = React.createClass({ ... });



当编译你的代码时，JSX会恰当的进行处理。

var App = (
  React.createElement(Form, null,
    React.createElement(Form.Row, null,
      React.createElement(Form.Label, null),
      React.createElement(Form.Input, null)
    )
  )
);

注意:
此特性在 v0.11 及以上可用


*******************************************************************************



注释

JSX 里添加注释很容易；它们只是 JS 表达式而已。
你仅仅需要小心的是当你在一个标签的子节点块时，要用 {} 包围要注释的部分。

var content = (
  <Nav>
    {/* child comment, 用 {} 包围 */}
    <Person
      /* 多
         行
         注释 */
      name={window.isLoggedIn ? window.name : ''} // 行尾注释
    />
  </Nav>
);

注意:
JSX 类似于 HTML，但不完全一样。参考 JSX 陷阱 了解主要不同。


{
    /*
    <mark>??? React JSX comment ???</mark>
    http://react2.xgqfrms.xyz/docs/jsx-in-depth.html
    <LikeButton />
    */
    /*
    JSX 里添加注释很容易；它们只是 JS 表达式而已。
    你仅仅需要小心的是当你在一个标签的子节点块时，要用 {} 包围要注释的部分。
    */
}

*******************************************************************************


JavaScript 表达式

*******************************************************************************


## 属性表达式

要使用 JavaScript 表达式作为属性值，只需把这个表达式用一对大括号 ({}) 包起来，不要用引号 ("")。

// 输入 (JSX):
var person = <Person name={window.isLoggedIn ? window.name : ''} />;

// 输出 (JS):
var person = React.createElement(
    Person,
    {name: window.isLoggedIn ? window.name : ''}
);

*******************************************************************************

## Boolean 属性

省略一个属性的值会导致JSX把它当做 true。
要传 false值 必须使用属性表达式。
这常出现于使用HTML表单元素，含有属性如disabled, required, checked 和 readOnly。

// 在JSX中，对于禁用按钮这二者是相同的。
<input type="button" disabled />;
<input type="button" disabled={true} />;

// 在JSX中，对于不禁用按钮这二者是相同的。
<input type="button" />;
<input type="button" disabled={false} />;

*******************************************************************************

## 子节点表达式

同样地，JavaScript 表达式可用于描述子结点：

// 输入 (JSX):
var content = <Container>{window.isLoggedIn ? <Nav /> : <Login />}</Container>;

// 输出 (JS):
var content = React.createElement(
    Container,
    null,
    window.isLoggedIn ? React.createElement(Nav) : React.createElement(Login)
);



*******************************************************************************






