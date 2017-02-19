# Browser-Vesion-Checker 





G:\wwwRoot\learning\Startup\VR-WebVR





function isMobile() {
    return /Android/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

isMobile();


function isPC() {
    return /Mozilla/i.test(navigator.userAgent) || /Windows NT 10\.0/i.test(navigator.userAgent);
}




## navigator.userAgent

console.log(navigator.userAgent);

// Chrome

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36

(function isChrome() {
    let fullVerion = null;
    if(/Chrome\/56/i.test(navigator.userAgent)){
        fullVerion = navigator.userAgent.substring(81, 100);
        //alert(fullVerion);
        //console.log(fullVerion);
    }else{
        //console.log(fullVerion);
        fullVerion = "Sorry, Unknow Version!";
    }
    return fullVerion;
})();



"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36".length;
// 114
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ".length;
// 81
"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87".length;
// 100


"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36".substring(81, 100);
// "Chrome/56.0.2924.87"


// Canary

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3014.0 Safari/537.36


function isChromeCanary() {
    return /Chrome\/58/i.test(navigator.userAgent);
}


// Firefox

Mozilla/5.0 (Windows NT 10.0; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0


function isFirefox() {
    return /Firefox\/50/i.test(navigator.userAgent);
}

// IE 11

Mozilla/5.0 (Windows NT 10.0; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko

function isIE() {
    return /Trident\/7\.0/i.test(navigator.userAgent);
}

// Edge

Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393


function isEdge() {
    return /Edge\/14/i.test(navigator.userAgent);
}


// Safari







function isMobile() {
    return /Android/i.test(navigator.userAgent) ||
        /iPhone|iPad|iPod/i.test(navigator.userAgent);
}








