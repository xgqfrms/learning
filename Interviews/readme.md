# JavaScript interview  



## Master the JavaScript interview  


https://www.sitepoint.com/community/t/this-week-in-javascript-9-january-2017/249568


https://www.sitepoint.com/community/  



岗位要求：
2 年及以上开发经验
手快
偏重 JavaScript 方向
熟悉 jQuery、Bootstrap，独自开发过 jQuery 插件为佳
熟练掌握 HTML5 及 CSS3 标准
知道并会使用 AngularJS
知道 XSS 原理及防范


https://blog.risingstack.com/articles/



https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/





ng-book 2.

https://resources.risingstack.com/Node_Hero+-+The+complete+Node.js+tutorial+series+from+RisingStack.pdf?__s=2s8uo98tjcphmc38mbmw  


https://www.ng-book.com/media/ng2/ng-book-2-table-of-contents.pdf  

https://github.com/ufo-github/Useful-Programming-E-Books r39

https://github.com/ufo-github/angular2-torrents  




https://github.com/flashlizi/fks


前端技能汇总 Frontend Knowledge Structure  



https://github.com/Charles-Duanzy/Front-end-questions-to-the-interview-stage


https://github.com/foru17/front-end-collect

https://github.com/jikeytang/front-end-collect



http://ustbhuangyi.github.io/picker/

https://github.com/ustbhuangyi/picker





http://www.fefork.com/interview/


http://www.fefork.com/%E5%89%8D%E7%AB%AF%E5%90%84%E7%A7%8D%E9%9D%A2%E8%AF%95%E9%A2%98/



[转]你真的了解HTML吗？–雅虎面试题
有这么一段HTML，请挑毛病：
<P>&nbsp;&nbsp;哥写的不是HTML，是寂寞。<br><br>&nbsp;&nbsp;我说：<br>不要迷恋哥，哥只是一个传说
这是原来雅虎一道笔试题（文字变了变），用了很多年了，还没有一个人完全答对过。
下方有公布答案，不过请各位还是先各自答题比较好





« 完全依靠自己个人写的第一条正则语句
编码为UTF-8页面中使用include后出现一个空白行的解决办法 »
[转]你真的了解HTML吗？–雅虎面试题
有这么一段HTML，请挑毛病：
<P>&nbsp;&nbsp;哥写的不是HTML，是寂寞。<br><br>&nbsp;&nbsp;我说：<br>不要迷恋哥，哥只是一个传说
这是原来雅虎一道笔试题（文字变了变），用了很多年了，还没有一个人完全答对过。
下方有公布答案，不过请各位还是先各自答题比较好
＝＝＝＝＝＝＝＝＝＝＝＝＝＝ 解答部分 ================
出这道题的动机是，太多人觉得HTML太简单，但它恰恰又是前端开发中最基础最重要的部分。HTML结构设计的合不合理，直接影响到代码易不易维护，灵不灵活，同时事关网页性能，协作效率。碰到不少人认为前端开发就是javascript开发，大错特错啊。javascript, html, css这三个前端开发的基础支柱，性质完全不同又紧密关联，对它们的正确理解，合理应用是专业与非专业的区别。有些后端工程师可以写出很漂亮的JS，但他们真的不懂怎么合理的把js, html, css结合起来应用。对html的准确把握，不像学一般的编程语言那样，而是建立在丰富实践经验和体会的基础上，是前端的工程师的基本功。
这不是一道较真题或是装逼题，正经一道“画鸡蛋”的题（引自http://twitter.com/RageCarrier/status/10712084993）考的是基本功。代码如其人，对一行代码的理解足以反映出他的前端开发素养。
言归正传。这道题的考点：
考点1：html和 xhtml的区别
这行代码在html 4.01 strict下是完全正确的，在xhtml 1.0 strict下是错误一堆的。所以明显是一个考点。在xhtml下所有标签是闭合的，p,br需要闭合, 标签不允许大写，P要小写。同时nbsp和br必须包含在容器里。html下这些都不是错。p在html里是可选闭合标签，是可以不用闭合的。
这个考点告诉你xhtml是多么苛刻。这是基本考点，答对，你能拿到60分。
考点2：考样式分离
用nbsp控制缩进是不合理的。应该用CSS干这事。所以应该删掉nbsp
考点3：合理使用标签
br是强制折行标签，p是段落。原题用连续的br制造两个段落的效果，效果是达到了，但显然用的不合理，段落间距后期无法再控制。正确的做法是用两个p表现两个段落。“我说”后面是正常的文字折行用br是合理的。
上面全答对，你就能拿到100分。
对原题改进的结果：
html 4.01:
<p>哥写的不是HTML，是寂寞。<p>我说：<br> 不要迷恋哥，哥只是一个传说
xhtml 1.0:
<p>哥写的不是HTML，是寂寞。</p><p>我说：<br /> 不要迷恋哥，哥只是一个传说</p>
加分：合理的用语义化标签
在前面的基础上合理的用语义化标签，对内容进行必要的标记，是加分的。但过度的使用标签，就画蛇添足了。如“我说”的话，可以用q标签标注。
<p>哥写的不是HTML，是寂寞。
<p>我说：<br> <q>不要迷恋哥，哥只是一个传说</q>
我觉得这就够了，如果再进一步，“我”用cite标注，“HTML” 用abbr或acronym标注（至于再讨论abbr和acronym的区别就太较真了），也OK。再复杂就没必要了。
<p> 哥写的不是<abbr title=”Hyper Text Markup Language”>HTML</abbr>，是寂寞。
<p><cite> 我</cite>说：<br> <q>不要迷恋哥，哥只是一个传说</q>




http://www.imf7.com/archives/tag/%E9%9D%A2%E8%AF%95%E8%80%83%E9%A2%98



https://xkong123.wordpress.com/2014/02/22/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98/





http://zkread.com/article/695132.html


HTML相关
1. 标签的定义与用法。

2. 块级元素和行内元素都有哪些?

3. 你真的了解HTML吗? 雅虎面试题 把前面黄底那段拿去搜索下就知道了(曾在某浪公司面试的时候被问到过，确实是很好的问题)。

CSS相关

1. 介绍所知道的CSS hack技巧(如：_， *， +， \9， !important 之类)。

2. 介绍CSS盒模型。

3. CSS层叠是什么?介绍一下。

4. 都知道哪些CSS浏览器兼容性问题。

5. 有时会被问到些刁钻点的题，比如position值都有哪些，CSS3都有哪些新内容...

JavaScript基础相关

1. HTTP协议的状态消息都有哪些?(如200、302对应的描述)

2. AJAX是什么? AJAX的交互模型(流程)? AJAX跨域的解决办法?

3. 同步和异步的区别?

4. 简述JavaScript封装。

5. JavaScript继承有哪两种形式形式，进行描述。

6. 什么是闭包?以下代码点击

会输出什么?为什么?能大概说明白的话继续问能想出几种解决办法。

<!DOCTYPE HTML> <html> <head> <meta charset="utf-8" /> <title>闭包演示</title> <style type="text/css"> p {background:gold;} </style> <script type="text/javascript"> function init() { var pAry = document.getElementsByTagName("p"); for( var i=0; i<pAry.length; i++ ) { pAry[i].onclick = function() { alert(i); } } } </script> </head> <body onload="init();"> <p>产品 0</p> <p>产品 1</p> <p>产品 2</p> <p>产品 3</p> <p>产品 4</p> </body> </html>
7. 在JS中this关键字的使用场合和用法(如在构造函数中、setTimeout中等)。

8. 简述下cookie的操作，还有cookie的属性都知道哪些。

9. IE与FF的JS兼容性都知道哪些。

10. DOM操作 - 怎样添加、移除、移动、复制、创建和查找节点(这个问题真心是基础题，一般不会问)。

jQuery相关

1. jQuery源码是否尝试去读过?说说基本的架构或者 jQuery.fn.init 中都做了哪些判断。

2. 都知道哪些不好的jQuery书写方式。

3. Sizzle是否有读过?

其它相关的加分项：

1. 都使用和了解过哪些编辑器?都使用和了解过哪些日常工具?

2. 都知道有哪些浏览器内核?开发过的项目都兼容哪些浏览器?

3. 国内外的JS牛人都知道哪些?

4. 瀑布流布局或者流式布局是否有了解

4. 正则表达式有系统学习过吗(看书或网上教程)?有的话就问问简单点的邮箱验证、URL验证， 或者问问 贪婪匹配与懒惰匹配 的理论知识。

5. Node.js是否有过尝试?到什么程度?说说个人理解的看法?

6. HTML5都有哪些新的JS API?

7. 前端优化知识都知道哪些?

8. 基础算法题(如快速排序，能否一两句说说重要的核心原理或者数组消重等)。

9. 是否有接触过或者了解过重构。




http://www.fefork.com/%E5%89%8D%E7%AB%AF%E5%90%84%E7%A7%8D%E4%BC%98%E5%8C%96/

















