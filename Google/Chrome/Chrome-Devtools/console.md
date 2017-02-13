# console




http://www.webhek.com/tag/console





http://www.webhek.com/add-styles-console

如何在浏览器控制台(console)里输出彩色样式调试信息

http://www.webhek.com/wordpress/wp-content/uploads/2015/07/c-1-500x456.png



console.log("%c%s", "color: red; background: yellow; font-size: 24px;", "警告！");

console.log(args,args,args,args,args,args,args,??? )



这里的用法很像C语言里格式化字符串输出的printf函数，
log的第一个参数声明第二、第三个参数的作用， %c%s
log的第二个参数就是样式，%c
log的第三个参数是要输出的字符串。%s







http://www.webhek.com/console-table-javascript



用console.table()调试javascript


var languages = [
    { name: "JavaScript", fileExtension: ".js" },
    { name: "TypeScript", fileExtension: ".ts" },
    { name: "CoffeeScript", fileExtension: ".coffee" }
];
console.log(languages);


console.table(languages);




var languages = {
    csharp: { name: "C#", paradigm: "object-oriented" },
    fsharp: { name: "F#", paradigm: "functional" }
};

console.table(languages);


如果你想限制console.table()显示某一列， 你可以在在参数中传入关键字列表 ：
// Multiple property keys
console.table(languages, ["name", "paradigm"]);


如果你想访问一个属性的话，一个参数就够了，
// A single property key
console.table(languages, "name");





http://www.webhek.com/nine-console-methods

Web程序员必须知道的 Console 对象里的九个方法



console.log('hello');
console.info('信息');
console.error('错误');
console.warn('警告');

console.log("%d年%d月%d日",2011,3,26);


console.group("第一组信息");
console.log("第一组第一条:我的博客(http://www.webhek.com)");
console.log("第一组第二条:CSDN(http://blog.csdn.net/u011043843)");
console.groupEnd();

console.group("第二组信息");
console.log("第二组第一条:程序爱好者QQ群： 259280570");
console.log("第二组第二条:欢迎你加入");
console.groupEnd();



var info = {
    blog:"http://www.webhek.com",
    QQGroup:259280570,
    message:"程序爱好者欢迎你的加入"
};
console.dir(info);


let div = document.querySelector('div');
console.dirxml(div);


const head = document.querySelector('head');
console.dirxml(head);



let result = 1;
console.assert( result );

let year = 2014;
console.assert(year == 2018 );



function add(a,b){
    console.trace();
    return a+b;
}
let x = add3(1,1);

function add3(a,b){
    return add2(a,b);
}
function add2(a,b){
    return add1(a,b);
}
function add1(a,b){
    return add(a,b);
}



console.trace
add @ VM1172:2
add1 @ VM1172:8
add2 @ VM1172:7
add3 @ VM1172:6
(anonymous) @ VM1172:5





function All(){
    alert(11);
    for(let i = 0; i < 10; i++){
        funcA(1000);
    }
        funcB(10000);
}
function funcA(count){
    for(let i = 0; i < count; i++){
        //
    }
}
function funcB(count){
    for(let i = 0; i < count; i++){
        //
    }
}

console.profile('性能分析器');
All();
console.profileEnd();

// Profile '性能分析器' started.
// Profile '性能分析器' finished.








http://www.webhek.com/console-time-console-timeend


console.time和console.timeEnd用法



// 启动计时器
console.time('testForEach');

// (写一些测试用代码)
function funcA(count){
    for(let i = 0; i < count; i++){
        console.log(`i = ${i}`);
    }
}

const count = 10000;
funcA(count)

// 停止计时，输出时间
console.timeEnd('testForEach');

// testForEach: 2797.382ms

// testForEach: 2780.454ms

// testForEach: 2785.166ms


这两个方法中都可以传人一个参数，作为计时器的名称，它的作用是在代码并行运行时分清楚各个计时器。
对console.timeEnd的调用会立即输出执行总共消耗的时间，单位是 ms毫秒。

测试JavaScript性能的方法有很多，但console.time/timeEnd两个方法是最基本、最直接的技巧。






















https://developer.chrome.com/devtools

https://developers.google.com/web/tools/chrome-devtools/shortcuts?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3


## Console Shortcuts

Open Developer Tools and bring focus to the console 
Ctrl + Shift + J


Focus the Console 
Ctrl + `

Clear Console 
Ctrl + L


Toggle Console / close settings dialog when open

Esc






















https://github.com/dwqs/blog/issues/32



http://www.alloyteam.com/2013/11/console-log/



https://developers.google.com/web/tools/chrome-devtools/console/


https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3





