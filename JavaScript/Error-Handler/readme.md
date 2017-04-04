# Error handler


https://learning.xgqfrms.xyz?error.js
view-source:https://learning.xgqfrms.xyz/error.js


<!-- 404 state code -->
<script type="text/rocketscript">
    function redirectToHost(){
        var host = location.host;
        location.href = "https://" + host;
    }
    var errorMsgData = {
        "400":"请求出现语法错误",
        "401":"没有访问权限",
        "403":"服务器拒绝执行该请求",
        "404":"指定的页面不存在",
        "405":"请求方法对指定的资源不适用",
        "406":"客户端无法接受相应数据",
        "408":"等待请求时服务器超时",
        "409":"请求与当前资源的状态冲突，导致请求无法完成",
        "410":"请求的资源已不存在，并且没有转接地址",
        "500":"服务器尝试执行请求时遇到了意外情况",
        "501":"服务器不具备执行该请求所需的功能",
        "502":"网关或代理服务器从上游服务器收到的响应无效",
        "503":"服务器暂时无法处理该请求",
        "504":"在等待上游服务器响应时，网关或代理服务器超时",
        "505":"服务器不支持请求中所用的 HTTP 版本",
        "1":"无法解析服务器的 DNS 地址",
        "2":"连接失败",
        "-7":"操作超时",
        "-100":"服务器意外关闭了连接",
        "-101":"连接已重置",
        "-102":"服务器拒绝了连接",
        "-104":"无法连接到服务器",
        "-105":"无法解析服务器的 DNS 地址",
        "-109":"无法访问该服务器",
        "-138":"无法访问网络",
        "-130":"代理服务器连接失败",
        "-106":"互联网连接已中断",
        "-401":"从缓存中读取数据时出现错误",
        "-400":"缓存中未找到请求的条目",
        "-331":"网络 IO 已暂停",
        "-6":"无法找到该文件或目录",
        "-310":"重定向过多",
        "-324":"服务器已断开连接，且未发送任何数据",
        "-346":"收到了来自服务器的重复标头",
        "-349":"收到了来自服务器的重复标头",
        "-350":"收到了来自服务器的重复标头",
        "-118":"连接超时"
    };
    var eCode = document.getElementById("eCode").innerHTML;
    var eMsg = errorMsgData[eCode];
    document.title = eMsg;
    document.getElementById("eMsg").innerHTML = eMsg;
</script>





# HTTP Status Codes

https://gist.github.com/xgqfrms-GitHub/3c1df86c0cca4281516ddbb7132f77c3



G:\wwwRoot\learning\JavaScript\Error-Handler

G:\wwwRoot\cdn\https\redirection.js



