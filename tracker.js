// https://gist.github.com/xgqfrms-GitHub/70bede946542a084182db9d952d36b9e#gistcomment-2054115


/*

(function() {
    var bi_hm = document.createElement("script");
    bi_hm.src = "https://www.xgqfrms.xyz/tracker.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bi_hm, s);
})();

*/

(function(){
    var OSName="Unknown OS";
    if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
    // document.write('Your OS: '+OSName);
    let osDiv = document.createElement("div");
    let osText = document.createTextNode(`Your OS is: ${OSName}`);
    osDiv.appendChild(osText);
    osDiv.style.color = "red";
    document.querySelector("body").insertAdjacentElement('beforeend', osDiv);
}());

(function() {
    alert("https://www.xgqfrms.xyz/tracker.js");
})();


