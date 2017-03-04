(function(window) {
    // 如果浏览器原生支持该事件,则退出  
    if ("onhashchange" in window.document.body) {
        console.log(`${this.navigator.appVersion} 浏览器原生支持该事件`);
        return;
    }
    let location = window.location,
        oldURL = location.href,
        oldHash = location.hash;
    // 每隔100ms检测一下location.hash是否发生变化
    setInterval(function() {
        let newURL = location.href,
            newHash = location.hash;
        // 如果hash发生了变化,且绑定了处理函数...
        if (newHash !== oldHash && typeof window.onhashchange === "function") {
            // execute the handler
            window.onhashchange({
                type: "hashchange",
                oldURL: oldURL,
                newURL: newURL
            });
            oldURL = newURL;
            oldHash = newHash;
        }
    }, 100);
})(window);
