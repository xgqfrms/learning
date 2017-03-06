# CSS relative-positioning





https://www.w3.org/TR/CSS22/visuren.html#relative-positioning


The 'top' and 'bottom' properties move relatively positioned element(s) up or down without changing their size. 'Top' moves the boxes down, and 'bottom' moves them up. Since boxes are not split or stretched as a result of 'top' or 'bottom', the used values are always: top = -bottom. If both are 'auto', their used values are both '0'. If one of them is 'auto', it becomes the negative of the other. If neither is 'auto', 'bottom' is ignored (i.e., the used value of 'bottom' will be minus the value of 'top').


top”和“bottom”属性向上或向下移动相对定位的元素，而不改变其大小。
“顶部”将盒子向下移动，“底部”将它们向上移动。由于“top”或“bottom”不会分割或拉伸框，所以使用的值总是：top = -bottom。
如果两者都是'auto'，它们的使用值都为'0'。如果其中一个是'auto'，它变成另一个的负。
如果两者都不是'auto'，'bottom'被忽略（即，'bottom'的使用值将减去'top'的值）。

https://www.w3.org/TR/CSS2/visuren.html#block-boxes

https://www.w3.org/TR/CSS22/visuren.html#relative-positioning



https://github.com/yiibook/future-of-code




http://www.cnblogs.com/xgqfrms/p/5834400.html

CSS 定位 relative && absolute 问题？
谁能解释一下，为什么div使用 relative是设置right,bottom 后，看不到div 呀，哪里多出来的 top , left 属性负值呀？
（已测试了所有最新的浏览器，自动添加的top , left 属性负值）



http://www.cnblogs.com/xgqfrms/p/5834400.html#3633073

position: relative; 
right: 200px;
bottom: 200px;


想对当前自己的位置(0,0) 偏移(-200, -200);

由于(0,0) 向右，向上都没有空间了，所以只能使用负值表示了！

引用

right: 200px;
bottom: 200px;
===
-top : 200px;
-left: 200px;

top = -bottom
left= - right

top”和“bottom”属性向上或向下移动相对定位的元素，而不改变其大小。
“顶部”将盒子向下移动，“底部”将它们向上移动。由于“top”或“bottom”不会分割或拉伸框，所以使用的值总是：top = -bottom。














