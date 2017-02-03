# React JSX comment   



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
http://react2.xgqfrms.xyz/docs/jsx-in-depth.html


注释

JSX 里添加注释很容易；它们只是 JS 表达式而已。
你仅仅需要小心的是当你在一个标签的子节点块时，要用 {} 包围要注释的部分。

var content = (
  <Nav>
    {/* child comment, 用 {} 包围 */}
    <Person
      /* 多
         行
         注
         释 */
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









