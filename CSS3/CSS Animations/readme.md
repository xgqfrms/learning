# CSS Animations  



https://www.sitepoint.com/css-animations-bringing-websites-to-life/



https://www.sitepoint.com/more-front-end-resources-and-css-animation-course/




Let’s have a look at what you’ll learn in the course:


## Animating in the Browser

Setting the scene for the course and looking at the benefits and principles of animation.

## Transitions – From A to B

Learn to add smooth transitions as styles change between two states.

## Keyframe Animations

Learn how to craft more complex motion with the `@keyframes` and `animation` properties; first the theory and then practical examples.

## Easing and Timing Functions

Discover how to add character and control the timing of your animations with easing and cubic bezier functions.

## Putting it all Together

Taking things to the next level, we’ll combine effects to create multiple transitions and multiple animations.

## Browser Considerations

We’ll discuss browser support, vendor prefixes and performance considerations to make sure your animations work on as many devices as possible.

## Accessibility and Animations

Finally, we’ll tackle accessibility concerns and ensure our animations don’t cause issues by being distracting or cause motion sickness.



https://cssanimation.rocks/


CSS animation articles, tips and tutorials. 

Tutorials and inspiration all about CSS animation.



https://cssanimation.rocks/cn/

https://cssanimation.rocks/cn/principles/

https://en.wikipedia.org/wiki/12_basic_principles_of_animation

http://weekly.cssanimation.rocks/add_subscriber






Tl;Dr

Too long ; Didn't read. 


http://www.urbandictionary.com/define.php?term=tl%3Bdr

https://en.wikipedia.org/wiki/TL;DR

http://www.internetslang.com/TLDR-meaning-definition.asp








## Smooth as Butter: Achieving 60 FPS Animations with CSS3

https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108#.gye3k9lwr


## Making Magic with WebSockets and CSS3

https://medium.com/outsystems-engineering/making-magic-with-websockets-and-css3-ec22c1dcc8a8#.epq93f65h

https://www.outsystems.com/blog/2016/10/outsystems-wins-hackathon.html







gbtags

http://www.gbtags.com/gb/rtreplayerpreview/2858.htm













精选4款用纯CSS3绘制的有趣图形


http://www.webhek.com/4-css3-pictures


http://www.webhek.com/css-3d-rotate-cube


CSS3景深、三维变换属性及旋转三维立方体的实现




http://www.webhek.com/css-supports


CSS @supports


http://www.webhek.com/feature-detection-function-efficiency-javascript

JavaScript里最有效率的功能特征检测方法

其中一种优化代码的方法就是在创建函数前先使用判断语句，而不是每次函数调用时都执行一次。




不好的写法

下面的写法相对而言不是那么优化和有效率：

function something() {
    if('something' in obj) {
        // something
    }
    else {
        // fallback
    }
}
上面的代码不是很高效的原因是，每次函数调用时，判断条件都要执行一次。





优化的代码

与其每次函数调用都要执行判断条件，不如先执行判断语句，然后创建函数：

var something = ('something' in obj) ? function() {
    // something
} : function() {
    // fallback
};



这种模式用在对浏览器是否具备某种特征功能判断时尤其有效，因为判断的目标特征不可能随后发生变化。

虽然这种判断语句的执行速度很快，你也没有理由重复执行它们多次!
总之，养成好的编码习惯，不要重复的代码！






将key名不带双引号的JSON字符串转换成JSON对象的方法
http://www.webhek.com/convert-unquoted-json-key-string-to-json-object


使用函数全文搜索追加双引号，代码：

json_string.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g, '$1"$3":');
eval('var json = new Object(' + json_string + ')');


最简单的一种方法是直接用eval()运行它：

var obj = eval('(' + invalid_json + ')');


http://www.webhek.com/html-json-form-submission


JSON编码格式提交表单数据详解


http://blog.jdk5.com/zh/convert-form-data-to-javascript-object-with-jquery/


http://www.webhek.com/link-prefetch



使用HTML5的页面资源预加载(Link prefetch)功能加速你的页面加载速度




http://www.webhek.com/css3-multi-columns

CSS3多列布局(columns)的用法


http://www.webhek.com/add-styles-console

如何在浏览器控制台(console)里输出彩色样式调试信息

http://www.webhek.com/wordpress/wp-content/uploads/2015/07/c-1-500x456.png



console.log("%c%s", "color: red; background: yellow; font-size: 24px;", "警告！");

console.log(args,args,args,args,args,args,args,??? )



这里的用法很像C语言里格式化字符串输出的printf函数，
log的第一个参数声明第二、第三个参数的作用， %c%s
log的第二个参数就是样式，%c
log的第三个参数是要输出的字符串。%s



http://www.webhek.com/tag/console



































