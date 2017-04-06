// IIFE 立即调用函数表达式
/* 
https://zh.wikipedia.org/wiki/%E7%AB%8B%E5%8D%B3%E8%B0%83%E7%94%A8%E5%87%BD%E6%95%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F

https://zh.wikipedia.org/wiki/立即调用函数表达式
*/

(function(i,s,o,g,r,a,m){
    // i = window
    // s= document
    // o= script
    // g= https://www.google-analytics.com/analytics.js
    // r = ga
    // a = ?
    // m = ?
    i['GoogleAnalyticsObject']=r;
    // window['GoogleAnalyticsObject'] = ga;
    i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)
    },
    i[r].l=1*new Date();
    /*
    window[ga] = window[ga] || function(){
        (window[ga].q=window[ga].q||[]).push(arguments);
    },
    window[ga].l=1*new Date();
     */
    a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];
    /*
    a=document.createElement("script"),
    m=document..getElementsByTagName("script")[0];
    */
    a.async=1;
    // document.createElement("script").async=1;
    a.src=g;
    // document.createElement("script").src="https://www.google-analytics.com/analytics.js";
    m.parentNode.insertBefore(a,m);
    // document.getElementsByTagName("script")[0].parentNode.insertBefore(a,m);;
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');


/*
console.log(ga);
console.log(typeof(ga));
console.log(ga.length);
*/

