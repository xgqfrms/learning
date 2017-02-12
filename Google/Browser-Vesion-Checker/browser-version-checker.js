// Browser-Vesion-Checker


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


// ES6

const browser = (() => {
    let ua = navigator.userAgent;
    // navigator.userAgent
    // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3009.0 Safari/537.36"
    // navigator.appVersion
    // "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3009.0 Safari/537.36"
    // navigator.vendor
    // "Google Inc."
    let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    let tem;
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
