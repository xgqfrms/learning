// image-list

/*
https://developer.mozilla.org/zh-CN/docs/Web/API/Document/getSelection

https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getSelection

返回一个  Selection 对象，表示用户选择的文本范围或插入符号的当前位置。


selection 是一个 Selection 对象。 
如果想要将 selection 转换为字符串，可通过连接一个空字符串（""）或使用 String.toString() 方法。

function foo() {
    let selObj = window.getSelection(); 
    console.log(selObj);
    let selRange = selObj.getRangeAt(0);
    // 其他代码
}

https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement/setSelectionRange



*/

// https://rollbar.com/docs/

// image-list

// document.querySelectorAll(`ul.image-list a::before`);


const links = document.querySelectorAll(`ul.image-list a`);

links[0];

links[0].textContent;
// "Ruby"

links[0].innerText;
// "Ruby"

links[0].innerHTML;
// "Ruby"


console.log(getComputedStyle(links[0], ':before').getPropertyValue('background-image'));
// url("https://rollbar.com/assets/shared/logos/ruby-icon.svg")

let img = getComputedStyle(links[0], '::before').getPropertyValue('background-image');
// url("https://rollbar.com/assets/shared/logos/ruby-icon.svg")


// string & regex


/*

<a href="/docs/notifier/rollbar-gem/" class="ruby">
    ::before
    Ruby
</a>

*/


// https://api.mlab.com/api/1/databases/node-mongodb/collections/test?apiKey=pa4Yku0O7y6CHLqKwDGlLKSfkdPfQprR
const url = `https://api.mlab.com/api/1/databases/node-mongodb/collections/test?apiKey=pa4Yku0O7y6CHLqKwDGlLKSfkdPfQprR`;

fetch(url, {
    method: "PUT",
    body: JSON.stringify({}),
    headers: {
        'Accept': 'application/json',
        'Access-Control-Request-Method': 'PUT',
        'Content-Type': 'application/json'
    },
    credentials: "same-origin"
}).then(function(response) {
    response.status; //=> number 100–599
    response.statusText; //=> String
    response.headers; //=> Headers
    response.url; //=> String

    return response.text()
}, function(error) {
    error.message; //=> String
})