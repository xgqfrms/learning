// view-source:https://chitu.cn/chat/login.html


/*
var parts = window.location.hostname.split('.')
if (parts[0] === 'www' || parts[parts.length - 1] === 'com') {
    parts.pop();
    if (parts[0] === 'www'){
        parts.shift();
    }
    window.location = 'https://' + parts.join('.') + '.cn' + window.location.pathname
}
*/

var parts = window.location.hostname.split('.')
if (parts[0] === 'www' || parts[parts.length - 1] === 'com') {
    parts.pop();// 抛出
    if (parts[0] === 'www'){
        parts.shift();// 移动
    }
    window.location = 'https://' + parts.join('.') + '.cn' + window.location.pathname
}

/*

var parts = window.location.hostname.split('.')
parts
["chitu", "cn"]

parts.shift()
"chitu"
parts
["cn"]


*/

browser = (function() {
    var ua = navigator.userAgent;
    var M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    var tem;

    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return "IE " + (tem[1] || "");
    }
    if (M[1] === "Chrome") {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem) {
            return tem.slice(1).join(" ").replace("OPR", "Opera");
        }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];

    tem = ua.match(/version\/(\d+)/i);
    if (tem) {
        M.splice(1, 1, tem[1]);
    }

    return M.join(" ");
})();

var browserName = browser.split(" ")[0].toLowerCase();
var browserVersion = Number(browser.split(" ")[1]);

if (
    browserName && browserVersion && (
        browserName === "chrome" && browserVersion < 40 ||
        (browserName === "ie" || browserName === "msie") && browserVersion < 11
    )
) {
    alert("浏览器版本太低，请更新(Chrome>=40, Firefox>=31, IE>=11)后再试");
    document.write("浏览器版本太低，请更新(Chrome>=40, Firefox>=31, IE>=11)后再试");
}






