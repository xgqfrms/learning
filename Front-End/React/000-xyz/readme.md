#  React  

https://react2.xgqfrms.xyz/



## HTML 标签对比 React 组件

https://react2.xgqfrms.xyz/docs/jsx-in-depth.html



## 属性表达式  

https://react2.xgqfrms.xyz/docs/jsx-in-depth.html


var sideLength = "200px";

var panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);


var pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 


var panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

var owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

var owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
);




https://react2.xgqfrms.xyz/docs/events.html

事件系统
合成事件
事件处理程序通过 合成事件（SyntheticEvent）的实例传递，SyntheticEvent 是浏览器原生事件跨浏览器的封装。SyntheticEvent 和浏览器原生事件一样有 stopPropagation()、preventDefault() 接口，而且这些接口夸浏览器兼容。

如果出于某些原因想使用浏览器原生事件，可以使用 nativeEvent 属性获取。每个和成事件（SyntheticEvent）对象都有以下属性：



https://react2.xgqfrms.xyz/docs/forms.html

表单组件
诸如 <input>、<textarea>、<option> 这样的表单组件不同于其他原生组件，因为他们可以通过用户交互发生变化。这些组件提供的界面使响应用户交互的表单数据处理更加容易。

关于 <form> 事件详情请查看 表单事件。


https://react2.xgqfrms.xyz/docs/events.html#表单事件




https://react2.xgqfrms.xyz/docs/dom-differences.html




## Spread Attributes  (v15.4.2)  


https://facebook.github.io/react/docs/jsx-in-depth.html  



## JSX 陷阱 (gotchas)  

https://react2.xgqfrms.xyz/docs/jsx-gotchas.html

HTML 实体

自定义 HTML 属性






## 实体的 Unicode 编号  

http://www.fileformat.info/info/unicode/char/

http://www.fileformat.info/info/unicode/char/b7/index.htm

http://www.fileformat.info/info/unicode/char/search.htm?q=%24&preview=entity


https://www.w3.org/WAI/intro/aria



https://facebook.github.io/react/docs/jsx-in-depth.html



/*
https://www.codecademy.com/courses/react-101/lessons/react-jsx-advanced/exercises/jsx-conditionals-invalid-if?action=lesson_resume

http://facebook.github.io/react/tips/if-else-in-JSX.html

https://react2.webgeeker.xyz/tips/if-else-in-JSX.html
https://react2.webgeeker.xyz/tips/if-else-in-JSX.html

https://facebook.github.io/react/docs/jsx-in-depth.html

*/




JSX   



https://facebook.github.io/react/docs/react-api.html#createelement


http://facebook.github.io/react/docs/top-level-api.html#react.createelement



## Components  


https://www.codecademy.com/en/courses/react-101/lessons/your-first-react-component/exercises/hello-world-component


A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.



CSS 属性选取器












