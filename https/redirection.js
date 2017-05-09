window.onload = (() => {
    /*
        <meta http-equiv="refresh" content="3; url=https://es6.xgqfrms.xyz">
        alert("After 3s, Auto goto URL\n => \n https://es6.xgqfrms.xyz/ ");
    */
    const arr = ["www", "es6", "ajax", "app", "blogs", "ng2-app", "cdn"];
    // ???
    let redirection = () => {
        let http = `http://${arr[0]}.xgqfrms.xyz/`,
            https = `https://${arr[0]}.xgqfrms.xyz/`,
            regex = /^https:\/\/[a-zA-Z]{3,}\.xgqfrms\.xyz$/gi,
            result = regex.test(window.location);
            // true
        if (!result) {
            // window.location = http + '/#body/' + result[1] + '#' + result[2];
            window.location = https;
        } else {
            // window.location = http;
            console.log(`window.location = https;`);
        }
    }
    redirection();
})();


/*
# HTTP Status Codes

https://gist.github.com/xgqfrms-GitHub/3c1df86c0cca4281516ddbb7132f77c3

G:\wwwRoot\learning\JavaScript\Error-Handler

G:\wwwRoot\cdn\https\redirection.js

http://www.text2image.com/user_images/text2image_V68273_20170404_113035.png

http://www.text2image.com/pit_t2i/saver

https://docs.microsoft.com/en-us/scripting/javascript/reference/exec-method-regular-expression-javascript

https://docs.microsoft.com/en-us/scripting/javascript/javascript-language-reference

https://docs.microsoft.com/en-us/scripting/javascript/what-s-new-in-javascript

https://docs.microsoft.com/en-us/scripting/javascript/javascript-fundamentals

https://docs.microsoft.com/en-us/scripting/javascript/advanced/advanced-javascript

https://docs.microsoft.com/zh-cn/scripting/javascript/advanced/recursion-javascript

https://docs.microsoft.com/en-us/scripting/

http://www.typescriptlang.org/docs/tutorial.html

https://docs.microsoft.com/zh-cn/scripting/winscript/windows-script-interfaces

https://docs.microsoft.com/zh-cn/scripting/chakra-hosting/javascript-runtime-hosting

https://docs.microsoft.com/zh-cn/scripting/chakra-hosting/targeting-edge-vs-legacy-engines-in-jsrt-apis

https://docs.microsoft.com/zh-cn/scripting/javascript/javascript-language-reference


https://msdn.microsoft.com/zh-CN/Library/ms533043(VS.85).aspx

https://msdn.microsoft.com/zh-cn/library/ms533022(v=vs.85).aspx



*/

if(result) {
    console.log(`window.location = https`);
} else {
   console.log(`window.location = http`);
}
null == false;
// false
null === false;
// false
null == null
// true
null === null
// true





