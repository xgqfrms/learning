# DOMParser


https://davidwalsh.name/convert-html-stings-dom-nodes




The JavaScript
All you need to do is create a DOMParser instance and use its parseFromString method:

let doc = new DOMParser().parseFromString('<div><b>Hello!</b></div>', 'text/html');



Returned is a document containing the nodes generated from your string. With said document you can use standard node traversal methods to retrieve the nodes we specified in our string:

let doc = new DOMParser().parseFromString('<div><b>Hello!</b></div>', 'text/html');
let div = doc.body.firstChild;

let divs = doc.body.querySelectorAll('div');



You don't need a single wrapping element like JSX components -- you can have sibling elements:

let doc = new DOMParser().parseFromString('<div>1</div><div>2</div>', 'text/html');
let firstDiv = doc.body.firstChild;
let secondDiv = firstDiv.nextSibling;



Here's a simple wrapping function for DOMParser to retrieve the nodes:

let getNodes = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes;

let nodes = getNodes('<div>1</div><div>2</div>');

// [div, div]





The DOMParser object is an awesome, sane method for converting strings to DOM nodes within JavaScript. Ditch your old shims and switch to this efficient, simple API!


DOMParser对象是一个真棒的，理性的方法，用于将字符串转换为JavaScript中的DOM节点。挖掘你的旧垫片，并切换到这个高效，简单的API！





7 Essential JavaScript Functions


https://davidwalsh.name/essential-javascript-functions


JavaScript Promise API

https://davidwalsh.name/promises


var p = new Promise(function(resolve, reject) {
    // Do an async task async task and then...
    if(/* good condition */) {
        resolve('Success!');
    }
    else {
        reject('Failure!');
    }
});

p.then(function() { 
    /* do something with the result */
}).catch(function() {
    /* error :( */
})



https://davidwalsh.name/promises-results





Unique Array Values


https://davidwalsh.name/array-unique


let j = [...new Set([1, 2, 3, 3])]
// [1, 2, 3]


Object Indexing vs. Array Collection


https://davidwalsh.name/object-array-index


假设我们有一个大文本文档，我们有一堆关键字，我们想要解析文档。

我们不关心关键字出现的次数 - 我们只是关心它已被使用。

当我们找到一个关键字时，我们需要记录该关键字，以便我们稍后进行检查。

低效方法：数组收集和搜索

//Assume an array called "foundKeywords" was defined above
if(shouldSave(keyword)) {
    foundKeywords.push(keyword);
}

//the foundKeywords array looks like:
//['keyword1','keyword2','keyword2',...]



有效方法：带索引的对象

//Assume an object {} called "foundKeywords" was defined above
if(shouldSave(keyword)) {
    foundKeywords[keyword] = 1;
}

if(foundKeywords[keyword]) { //FOUND!
    //do something
}











