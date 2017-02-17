# Parsing XML





Parsing XML
XML (which stands for E xtensible Markup Language) is very similar to HTML—it uses tags between angle brackets. The difference is that XML allows you to use tags that you make up, rather than tags that the W3C decided on. For instance, you could create an API that returns information about a pet:

<pet>
    <name>Jeffrey</name>
    <species>Giraffe</species>
</pet>

As long as you document the structure of your API's response, other people can use your API to get information about <pet>s.





http://www.runoob.com/xml/xml-tutorial.html



http://www.runoob.com/xml/xml-encoding.html

<?xml version="1.0" encoding="us-ascii"?>
<?xml version="1.0" encoding="windows-1252"?>
<?xml version="1.0" encoding="ISO-8859-1"?>
<?xml version="1.0" encoding="UTF-8"?>
<?xml version="1.0" encoding="UTF-16"?>




http://www.runoob.com/xml/xml-validator.html


<?xml version="1.0" encoding="UTF-8"?>


http://www.runoob.com/xml/xml-dom-advanced.html

XML DOM - 高级


获取元素的值

txt=xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;

获取属性的值

txt=xmlDoc.getElementsByTagName("title")[0].getAttribute("lang");

改变元素的值

x=xmlDoc.getElementsByTagName("title")[0].childNodes[0];
x.nodeValue="Easy Cooking";

创建新的属性


x=xmlDoc.getElementsByTagName("book");

for(i=0;i<x.length;i++){
    x[i].setAttribute("edition","first");
}


创建元素


XML DOM 的 createElement() 方法创建一个新的元素节点。
XML DOM 的 createTextNode() 方法创建一个新的文本节点。
XML DOM 的 appendChild() 方法向节点添加子节点（在最后一个子节点之后）。
如需创建带有文本内容的新元素，需要同时创建元一个新的元素节点和一个新的文本节点，然后把他追加到现有的节点。

newel=xmlDoc.createElement("edition");
newtext=xmlDoc.createTextNode("First");
newel.appendChild(newtext);

x=xmlDoc.getElementsByTagName("book");
x[0].appendChild(newel);


实例解释
创建一个 <edition> 元素
创建值为 "First" 的文本节点
把这个文本节点追加到新的 <edition> 元素
把 <edition> 元素追加到第一个 <book> 元素




删除元素

x=xmlDoc.getElementsByTagName("book")[0];
x.removeChild(x.childNodes[0]);



注释：上面实例的结果可能会根据所用的浏览器而不同。Firefox 把新行字符当作空的文本节点，而 Internet Explorer 不是这样。


http://www.runoob.com/xml/xml-dont.html

XML 注意事项



Internet Explorer - XML 数据岛
它是什么？XML 数据岛是嵌入到 HTML 页面中的 XML 数据。
为什么要避免使用它？XML 数据岛只在 Internet Explorer 浏览器中有效。
用什么代替它？您应当在 HTML 中使用 JavaScript 和 XML DOM 来解析并显示 XML。


XML 数据岛实例
本例使用 XML 文档 "cd_catalog.xml"。
把 XML 文档绑定到 HTML 文档中的一个 <xml> 标签。id 属性定义数据岛的标识符，而 src 属性指向 XML 文件：

本实例只适用于 IE 浏览器

<html>
<body>
<xml id="cdcat" src="cd_catalog.xml"></xml>
<table border="1" datasrc="#cdcat">
<tr>
<td><span datafld="ARTIST"></span></td>
<td><span datafld="TITLE"></span></td>
</tr>
</table>
</body>
</html>


Internet Explorer - 行为
它是什么？Internet Explorer 5 引入了行为。行为是通过使用 CSS 样式向 XML （或 HTML ）元素添加行为的一种方法。
为什么要避免使用它？只有 Internet Explorer 支持 behavior 属性。
使用什么代替它？使用 JavaScript 和 XML DOM（或 HTML DOM）来代替它。



ie5behavior.htc

https://css-tricks.com/forums/topic/what-is-a-htc-file/

http://stackoverflow.com/questions/10767006/what-is-htc-file-how-it-works-in-internet-explorer

http://stackoverflow.com/questions/1617667/what-is-difference-between-htc-and-js-file

https://msdn.microsoft.com/en-us/library/ms537512(VS.85).aspx


https://msdn.microsoft.com/library/ms531018(v=vs.85).aspx


HTML Components (HTCs) 

https://msdn.microsoft.com/zh-cn/library/ms531079(v=vs.85).aspx

https://msdn.microsoft.com/zh-cn/library/ms533028(v=vs.85).aspx

https://www.sitepoint.com/community/t/css-behavior-htc-file/18982

http://reference.sitepoint.com/css/behavior












