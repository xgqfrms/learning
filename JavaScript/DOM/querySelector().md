# querySelector()  




## HTML DOM querySelector() Method

http://www.w3schools.com/jsref/met_document_queryselector.asp


获取文档中class =“example”的第一个元素：

document.querySelector(".example");

获取文档中父元素为<div>元素的第一个<p>元素。

document.querySelector("div > p");

获取文档中具有“target”属性的第一个<a>元素：

document.querySelector("a[target]");


<h2>A h2 element</h2>
<h3>A h3 element</h3>

document.querySelector("h2, h3").style.backgroundColor = "red";
如果<h2>元素放置在文档中的<h3>元素之前, <h2>元素是将获得红色背景颜色的元素。

<h3>A h3 element</h3>
<h2>A h2 element</h2>

document.querySelector("h2, h3").style.backgroundColor = "red";
如果<h3>元素放置在文档中的<h2>元素之前, <h3>元素是将获得红色背景颜色的元素。







## CSS Syntax and Selectors 

http://www.w3schools.com/css/css_syntax.asp  

http://www.w3schools.com/cssref/css_selectors.asp






