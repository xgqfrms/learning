// chitu.cn/chat/login


var parts = window.location.hostname.split('.')
if (parts[0] === 'www' || parts[parts.length - 1] === 'com') {
    parts.pop();
    if (parts[0] === 'www'){
        parts.shift();
    }
    window.location = 'https://' + parts.join('.') + '.cn' + window.location.pathname
}

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
