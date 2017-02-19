// Modernizr



var Detect = {};

Detect.supportsWebSocket = function() {
    return window.WebSocket || window.MozWebSocket 
}, 
Detect.userAgentContains = function(a) {
    return navigator.userAgent.indexOf(a) != -1 
}, 
Detect.isTablet = function(a) {
    if (a > 640)
        if (Detect.userAgentContains("Android") && Detect.userAgentContains("Firefox") || Detect.userAgentContains("Mobile")) return !0;
    return !1 
}, 
Detect.isWindows = function() {
    return Detect.userAgentContains("Windows") 
}, 
Detect.isChromeOnWindows = function() {
    return Detect.userAgentContains("Chrome") && Detect.userAgentContains("Windows") 
}, 
Detect.canPlayMP3 = function() {
    return Modernizr.audio.mp3 
}, 
Detect.isSafari = function() {
    return Detect.userAgentContains("Safari") && !Detect.userAgentContains("Chrome") 
}, 
Detect.isOpera = function() {
    return Detect.userAgentContains("Opera") 
}, 
Detect.isFirefoxAndroid = function() {
    return Detect.userAgentContains("Android") && Detect.userAgentContains("Firefox")
}



/*


Detect

// Object { 
    supportsWebSocket: Detect.supportsWebSocket(), 
    userAgentContains: Detect.userAgentContains(), 
    isTablet: Detect.isTablet(), 
    isWindows: Detect.isWindows(), 
    isChromeOnWindows: Detect.isChromeOnWindows(), 
    canPlayMP3: Detect.canPlayMP3(), 
    isSafari: Detect.isSafari(), 
    isOpera: Detect.isOpera(), 
    isFirefoxAndroid: Detect.isFirefoxAndroid() 
}





*/
